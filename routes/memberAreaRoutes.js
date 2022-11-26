const { Router } = require('express');
const pool = require('../db');
const router = Router();

// Get All Recipes Attributed to the Logged In Member
const getMembersRecipes = async (req, res) => {
    const userId = req.params.id;
    pool.query(`SELECT * FROM recipes
    WHERE created_by_user = $1`, [userId],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
};

//Delete a Recipe the Member has Made.
const deleteMembersRecipes = async (req, res) => {
    const recipeId = req.params.id;
    pool.query(`DELETE FROM recipes WHERE id = $1`, [recipeId],
    (error, results) => {
        if (!results.rows.length) {
            res.send("This Recipe was not deleted");
        } else if (error) {
            throw error;
        }
        res.send('Recipe Deleted');
    })
};


router.get('/:id', getMembersRecipes);
router.delete('/:id', deleteMembersRecipes);

module.exports = router;
