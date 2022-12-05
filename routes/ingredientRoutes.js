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

// Get a list of all ingredients in Database
const getAllIngredients = async(req, res) => {
    pool.query(`SELECT * FROM ingredients`,
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
}

const addNewIngredient = async(req, res) => {
    const name = req.body.ingredientName;
    pool.query(`INSERT INTO ingredients (name)
    VALUES ($1)`, [name],
    (error, results) => {
        if (error) throw error;
        res.send(results.rows);
    })
}

router.get('/:id', getRecipesIngredients);
router.get('/', getAllIngredients);
router.post('/', addNewIngredient)

module.exports = router;