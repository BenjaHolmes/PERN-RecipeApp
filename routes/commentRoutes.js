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

// For this route, i check if the comment has any subComments, if so, instead of deleting the whole Chain,
// I update the main comment to remove it's body content, so the chain is kept in tact.
const deleteComment = async(req, res) => {
    const commentId = req.params.id;
    const updateMsg = `< The Content of this Message was Removed at the Original Author's Request >`
    pool.query(`SELECT * FROM subcomments WHERE main_comment_id = $1`, [commentId],
    (error, results) => {
        if (results.rows.length) {
            pool.query(`UPDATE comments SET body = $1
            WHERE comment_id = $2`, [updateMsg, commentId],
            (error, results) => {
                if(error) throw error;
                res.send('Comment Body Removed Successfully');
            })
        } else {
            pool.query("DELETE FROM comments WHERE comment_id = $1", [commentId],
            (error, results) => {
            if (error) throw error;
            res.status(200).send("Comment was Removed Successfully");
        })
        }   
    })
}

const postSubcomment = async(req, res) => {
    const comment_body = req.body.comment_body;
    const main_comment_id = req.body.main_comment_id; 
    const user_id = req.body.user_id; 
    const recipe_id = req.body.recipe_id;
    pool.query(`INSERT INTO subcomments (body, main_comment_id, user_id, recipe_id)
    VALUES ($1, $2, $3, $4)`, [comment_body, main_comment_id, user_id, recipe_id],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows[0]);
    })
}

const deleteSubComment = async(req, res) => {
    const subCommentId = req.params.id;
    pool.query(`DELETE FROM subcomments WHERE subcomment_id = $1`, [subCommentId],
    (error, results) => {
        if (error) throw error;
        res.status(200).send("Subcomment was Removed Successfully");
    })
}

router.get('/sub/:id', getSubcomments);
router.get('/:id', getCommentsById);
router.post('/post', postComment);
router.post('/sub', postSubcomment);
router.delete('/:id', deleteComment);
router.delete('/sub/:id', deleteSubComment);

module.exports = router;