const { Router } = require('express');
const pool = require('../db');
const router = Router();

const getArticles = async (req,res) => {
    pool.query(`SELECT * FROM articles`,
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
}

router.get('/', getArticles);

module.exports = router;