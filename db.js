const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "recipeApp",
    password: "password",
    port: 5432
});

module.exports = pool;