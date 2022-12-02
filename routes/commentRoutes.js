const { Router } = require('express');
const pool = require('../db');
const router = Router();

// Get all of the Main Comments associated with one recipe ID
const getCommentsById = async(req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM comments
    JOIN users ON users.id = comments.user_id
    WHERE recipe_id = $1`, [id],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
};

// Get all of the Subcomments Associated with a Main Comment
const getSubcomments = async(req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM subcomments
    JOIN users on users.id = subcomments.user_id
    WHERE subcomments.recipe_id = $1`, [id],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
}

router.get('/sub/:id', getSubcomments);
router.get('/:id', getCommentsById);

module.exports = router;