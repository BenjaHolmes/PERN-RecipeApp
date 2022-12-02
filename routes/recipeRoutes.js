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


router.get('/all', getRecipes);
router.get('/:id', getRecipeById);

module.exports = router;

