const bcrypt = require('bcryptjs');
const passport = require('passport');
const pool = require('../db');
const localStrategy = require('passport-local').Strategy;


const verifyCallback = (username, password, done) => {
    pool.query(`SELECT * FROM users WHERE username = $1`, [username],
    (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length > 0) {
            const user = results.rows[0];
            bcrypt.compare(password, user.password, (error, isMatch) => {
                if (error) {
                  throw error;
                }
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Password Incorrect"});
                }
            })
        } else {
            return done(null, false, {message: "This User Was Not Found"})
        }
    }
);
};

const strategy = new localStrategy(verifyCallback);
passport.use(strategy);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    pool.query(
        'SELECT * FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                return done(error);
            }
            return done(null, results.rows[0]);
        });
    });

























// // we pass our function the instance of the passport library 
// // so that it is the same instance throughout our app.
// module.exports = function(passport) {
//     passport.use(
//         // username becomes req.body.username and password is req.body.password from the login route
//         // done is a callback which moves onto the next step
//         new localStrategy((username, password, done) => {
//             // now we find the user account which matches the username provided by req.body.username
//             pool.query(`SELECT * FROM users WHERE username = $1`, [username],
//             (error, results) => {
//                 if (error) throw error;
//                 if (results.rows.lenth > 0) {
//                     const user = results.rows[0];
//                     bcrypt.compare(password, user.password, (error, result) => {
//                         if (error) throw error;
//                         if (result === true) {
//                             return done(null, user);
//                         } else {
//                             // Comparison Failed, password mismatch
//                             return done(null, false);
//                         }
//                     })
//                 } else {
//                     // A matching user was not found
//                     return done(null, false);
//                 }
//             })
//         })
//     );
//     // This function stores a cookie in the browser with our user id.
//     passport.serializeUser((user, done) => {
//         done(null, user.id)
//     })
//     // This function takes the id information from our cookie, and uses it to get the user's data
//     passport.deserializeUser((id, done) => {
//         pool.query(`SELECT * FROM users WHERE id = $1`, [id], (error, results) => {
//             if (error) throw error;
//             return done(null, results.rows[0]);
//         })
//     })
// }