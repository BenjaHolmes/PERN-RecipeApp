// Required Modules ------------------------------------------------------

const cors = require('cors');
const express = require('express');
const pool = require('./db');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes');
const memberAreaRoutes = require('./routes/memberAreaRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const commentRoutes = require('./routes/commentRoutes');
const articleRoutes = require('./routes/articleRoutes');

// Middleware ------------------------------------------------------------

// Turns incoming data into JSON

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

// Cors allows us to connect to our React App

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: true
}));

// Creates our session to store id in cookie
const store = new session.MemoryStore();
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: false,
        secure: false,
        maxAge: 300000000
    },
    store
}));

require('./config/passportConfig');
// Reloads passport each time user navigates to new route to check for session expiration etc
app.use(passport.initialize());
// Allows passport to use session object for authentication
app.use(passport.session());

// // Middleware to check if passport and session are working
// app.use((req, res, next) => {
//     console.log(req.session);
//     console.log(req.user);
//     next();
// });


// Routes ----------------------------------------------------------------

app.get('/', (req, res) => {
    console.log('server working');
    res.send('server working');
})

app.post('/auth/login', passport.authenticate('local'), (req, res, next) => {
    res.send(req.user);
});

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

app.get('/auth/getUser', (req, res) => {
    res.send(req.user);
});

//LogOut 
app.get('/auth/logout', (req, res) => {
    req.logOut(() => {
        res.send({});
    })
})

// Route Handlers --------------------------------------------------------
app.use('/recipes', recipeRoutes);
app.use('/members', memberAreaRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/comments', commentRoutes);
app.use('/articles', articleRoutes);


// Server Setup ----------------------------------------------------------
const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`)
});