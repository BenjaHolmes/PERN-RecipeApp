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

const postComment = async(req, res) => {
    const { comment, recipe_id, user_id } = req.body;
    pool.query(`INSERT INTO comments (body, recipe_id, user_id)
    VALUES ($1, $2, $3)`, [comment, recipe_id, user_id],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows[0]);
    })
}

const deleteComment = async(req, res) => {
    const commentId = req.params.id;
    pool.query("DELETE FROM comments WHERE comment_id = $1", [commentId],
    (error, results) => {
        if (error) throw error;
        res.status(200).send("Comment was Removed Successfully");
    })
}

router.get('/sub/:id', getSubcomments);
router.get('/:id', getCommentsById);
router.post('/post', postComment);
router.delete('/:id', deleteComment)

module.exports = router;