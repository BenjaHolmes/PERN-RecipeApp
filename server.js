// const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
// const passport = require('passport');
// const passportLocal = require('passport-local').Strategy;
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const session = require('express-session');
const app = express();

// // Middleware

// Creates a new body object containing the data parsed on request object (req.body)
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json);

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

// //Routes
// app.post('/login', (req, res) => {
//     console.log(req.body);
// })

// app.post('/auth/register', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// })

// app.get('/user', (req, res) => {
//     console.log(req.body);
// })

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`)
});