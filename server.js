// const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const pool = require('./db');
// const passport = require('passport');
// const passportLocal = require('passport-local').Strategy;
// const cookieParser = require('cookie-parser');

const bcrypt = require('bcryptjs');
// const session = require('express-session');
const app = express();

// // Middleware

// Turns incoming data into JSON, replacement for body-parser
app.use(express.json());

// Cors allows us to connect to our React App
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// // Creates our session to store id in cookie
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
// }));

// // According to docs might not need this anymore.
// app.use(cookieParser('secret'))




app.get('/', (req, res) => {
    console.log('server working');
    res.send('server working');
})

//Routes
app.post('/auth/login', (req, res) => {
    console.log(req.body);
})

app.post('/auth/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    //Check if Email already exists
    pool.query( "SELECT u FROM users u WHERE u.email = $1", [email],
     (error, results) => {
        if (results.rows.length) {
            res.send("An Account with this Info already exists");
        }
    pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
    [username, email, hashedPassword],
        (error, results) => {
            if (error) throw error;
            res.send({
                username: username,
                email: email
            });
        })
    })
})

// app.get('/user', (req, res) => {
//     console.log(req.body);
// })

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`)
});