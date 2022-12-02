const { Router } = require('express');
const pool = require('../db');
const router = Router();

// Get a Recipe's Ingredients based on it's recipe id.
const getRecipesIngredients = async(req, res) => {
    const id = req.params.id;
    pool.query (`SELECT * FROM recipe_ingredients 
    JOIN ingredients ON ingredients.id = recipe_ingredients.ingredient_id
    WHERE recipe_id = $1`, [id],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
};


router.get('/:id', getRecipesIngredients);

module.exports = router;