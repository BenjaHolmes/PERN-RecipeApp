const { Router } = require('express');
const pool = require('../db');
const router = Router();


// Generate List of all Recipes as Site Starts
const getRecipes = async (req, res) => {
    pool.query(`SELECT * FROM recipes
    JOIN allergy_info ON
    allergy_info.recipe_id = recipes.id`,
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
};

// Get One Recipe based on ID
const getRecipeById = async(req, res) => {
    const id = req.params.id;
    pool.query (`SELECT * FROM recipes 
    JOIN allergy_info ON allergy_info.recipe_id = recipes.id
    JOIN recipe_steps ON recipe_steps.recipe_id = recipes.id
    WHERE recipes.id = $1`, [id],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
};

// Handling user likes/dislikes
const handleLikeDislike = async(req, res) => {
    const recipe_id = parseInt(req.body.recipe_id);
    const likeType = req.body.likeType;
    if (likeType === 'like') {
        pool.query(`UPDATE recipes
    SET number_of_likes = number_of_likes + 1
    WHERE id = $1`, [recipe_id]);
    } else if (likeType === 'dislike') {
        pool.query(`UPDATE recipes
    SET number_of_dislikes = number_of_dislikes + 1
    WHERE id = $1`, [recipe_id]);
    }
    res.send(likeType);
}


router.get('/all', getRecipes);
router.get('/:id', getRecipeById);
router.post('/likes', handleLikeDislike);

module.exports = router;

