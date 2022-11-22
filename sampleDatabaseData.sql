-- Sample Recipes 
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('Spaghetti Bolognese', 100, 5, 4)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user)
VALUES ('', 0, 0, 0)

-- Ingredients
INSERT INTO ingredients (name)
VALUES ('Minced Beef'), ('Tinned Tomatoes'), ('Spaghetti'), ('Onion'), ('Garlic'), 
('Worchester Sauce'), ('Beef Stock'), ('Tomato Puree'), ('Red Wine');
INSERT INTO ingredients (name)
VALUES (), (), (), (), (), (), (), (), (), (), ();
INSERT INTO ingredients (name)
VALUES (), (), (), (), (), (), (), (), (), (), ();

-- Recipe Ingredients 
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (1, 1, '500g' ), (1, 2, '400g' ), (1, 3, '400g' ), (1, 4, '1 Whole' ), (1, 5, '1 Clove' ),
(1, 6, '1 TBPS' ), (1, 7, '1 Stock Cube' ), (1, 8, '1 TBSP' ), (1, 9, '200ml' );

-- Allergy Info
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (1, true, false, true, true, false);

-- Recipe Steps
INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7
step_8, step_9, step_10)
VALUES (1, 'Sauté the Onions and Garlic until translucent.',
 'Add the Beef and cook until browned.',
 'Add the Tomatoes, Worchester Sauce, Stock Cubes and simmer for 20 mins',
 'With ten minutes of simmer remaining, cook the spaghetti in boiling water', 
 'Serve after adding Salt and Pepper.', 
 '', '', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7
step_8, step_9, step_10)
(1, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10')

-- Join All Recipe Info
SELECT * FROM recipes
JOIN recipe_ingredients ON
recipes.id = recipe_ingredients.recipe_id
JOIN ingredients ON
recipe_ingredients.ingredient_id = ingredients.id
JOIN allergy_info ON
allergy_info.recipe_id = recipes.id
JOIN recipe_steps ON
recipe_steps.recipe_id = recipes.id;

-- Get Recipe Ingredients + Quantity
SELECT * FROM recipes
JOIN recipe_ingredients ON
recipe_ingredients.recipe_id = recipes.id
JOIN ingredients ON
ingredients.id = recipe_ingredients.ingredient_id;

-- Get Allergen and Steps
SELECT * FROM recipes
JOIN allergy_info ON
allergy_info.recipe_id = recipes.id
JOIN recipe_steps ON
recipe_steps.recipe_id = recipes.id;