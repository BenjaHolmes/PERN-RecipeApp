const { Router } = require('express');
const pool = require('../db');
const router = Router();
const bcrypt = require('bcrypt');

// Generate List of all Recipes as Site Starts
const getRecipes = async (req, res) => {
    pool.query(`SELECT * FROM recipes 
    JOIN recipe_ingredients ON recipes.id = recipe_ingredients.recipe_id 
    JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id 
    JOIN allergy_info ON allergy_info.recipe_id = recipes.id 
    JOIN recipe_steps ON recipe_steps.recipe_id = recipes.id`,
    (error, results) => {
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.send(results.rows);
    })
}


router.get('/', getRecipes);

module.exports = router;