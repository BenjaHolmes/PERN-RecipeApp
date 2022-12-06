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

// Begin to Create a new Recipe
const createNewRecipe = async(req, res) => {
    const name = req.body.name;
    const created_by_user = req.body.created_by_user;
    const likeDislike = 0;
    const picId = null;
    pool.query(`INSERT INTO recipes (name, number_of_likes, 
        number_of_dislikes, created_by_user, picture_id)
        VALUES ($1, $2, $3, $4, $5)`, [name, likeDislike, likeDislike, created_by_user, picId],
        (error, results) => {
            if (error) throw error;
            res.status(201).send('Recipe Added Successfully');
            // // I dont think i can return the newly created id without a Get request also
            // pool.query(`SELECT * FROM recipes WHERE name = $1 AND created_by_user = $2`
            // , [name, created_by_user],
            // (error, results) => {
            //     if (error) throw error;
            //     res.send(results.rows[0]);
            // })
        })
}

// Create a Recipe Step 2
const createNewRecipeIngredients = async(req, res) => {
    const { name, created_by_user, ingredient_id, quantity } = req.body;

    pool.query(`SELECT * FROM recipes WHERE name = $1 AND created_by_user = $2`,
    [name, created_by_user], 
    (error, results) => {
        if (error) throw error;
        if(results.rows.length) {
            const recipeId = results.rows[0].id;
            pool.query(`INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
            VALUES ($1, $2, $3)`, [recipeId, ingredient_id, quantity],
                (error, results) => {
                if (error) throw error;
                    res.status(201).send("Ingredients Added Successfully");
            })
        } else {
            res.send('We Couldnt Find a Recipe with these Details');
        }
    })
}


router.get('/all', getRecipes);
router.get('/:id', getRecipeById);
router.post('/likes', handleLikeDislike);
router.post('/', createNewRecipe);
router.post('/ingredients', createNewRecipeIngredients);

module.exports = router;

