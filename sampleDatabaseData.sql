-- Sample Recipes 
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Spaghetti Bolognese', 100, 5, 4, 1)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Chopped Salad', 55, 23, 4, 2)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Lemon Pepper Chicken', 33, 67, 4, 3)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Pork Bahn Mi', 250, 4, 4, 4)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Sesame Peanut Noodles', 257, 200, 4, 5)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Crispy Fish Tacos', 500, 169, 4, 6)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Cod Fish Cakes', 999, 998, 4, 7)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Tiramisu', 555, 147, 4, 8)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Vegan Minestrone', 1, 800, 4, 9)
INSERT INTO recipes (name, number_of_likes, number_of_dislikes, created_by_user, picture_id)
VALUES ('Pork Stir Fry', 89, 35, 4, 10)





-- Ingredients
INSERT INTO ingredients (name)
VALUES ('Minced Beef'), ('Tinned Tomatoes'), ('Spaghetti'), ('Onion'), ('Garlic'), 
('Worchester Sauce'), ('Beef Stock'), ('Tomato Puree'), ('Red Wine');
INSERT INTO ingredients (name)
VALUES ('Romaine Lettuce'), ('Red Onion'), ('Chickpeas'), ('Cherry Tomatoes'), ('Salami'), ('Mozzarella'),
('Pickled Chillies'), ('Roasted Red Peppers'), ('Fresh Basil');
INSERT INTO ingredients (name)
VALUES ('Chicken Breast'), ('Lemon Pepper Seasoning'), ('Flour'), ('Butter'), ('Chicken Stock'), 
('Lemon Juice'), ('Parsley'), ('Lemon Slices');
INSERT INTO ingredients (name)
VALUES ('White Vinegar'), ('Sugar'), ('Carrots'), ('Daikon'), ('Soy Sauce'), ('Fish Sauce'), 
('Pork Tenderloin'), ('Baguette'), ('Mayonnaise'), ('Jalapeño'), ('Coriander');
INSERT INTO ingredients (name)
VALUES ('Egg Noodles'), ('Sesame Oil'), ('Peanut Butter'), ('Honey'), ('Spring Onion');
INSERT INTO ingredients (name)
VALUES ('Red Cabbage'), ('Radish'), ('Sour Cream'), ('Lime'), ('Cod Fillets'), ('Tortillas'),
('Cayenne Pepper');
INSERT INTO ingredients (name)
VALUES ('Potato'), ('Breadcrumbs'), ('Parmesan Cheese'), ('Eggs'), ('Olive Oil');
INSERT INTO ingredients (name)
VALUES ('Egg Yolks'), ('Dark Rum'), ('Marscarpone'), ('Double Cream'), ('Espresso Powder'), 
('Ladyfingers'), ('Cocoa Powder');
INSERT INTO ingredients (name)
VALUES ('Celery'), ('Tomato Puree'), ('Vegetable Stock'), ('Pasta'), ('Mixed Herbs'), ('Spinach');
INSERT INTO ingredients (name)
VALUES ('Rice');


-- Recipe Ingredients 
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (1, 1, '500g' ), (1, 2, '400g' ), (1, 3, '400g' ), (1, 4, '1 Whole' ), (1, 5, '1 Clove' ),
(1, 6, '1 TBPS' ), (1, 7, '1 Stock Cube' ), (1, 8, '1 TBSP' ), (1, 9, '200ml' );

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (2, 10, '2 Heads' ), (2, 11, '1/2' ), (2, 12, '1 Can' ), (2, 13, 'Handful' ), (2, 14, '1/2 Pack' ),
(2, 15, '1 Pack' ), (2, 16, '1 Whole' ), (2, 17, '1 Whole'), (2, 18, '10 Leaves' );

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (3, 19, '4' ), (3, 20, '2 TBSP' ), (3, 21, '250g' ), (3, 22, '4 TBSP' ), (3, 23, '250g' ),
(3, 5, '2 Cloves' ), (3, 24, 'Half' ), (3, 25, '1 TBSP Chopped' ), (3, 26, '1 Chopped' );

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (4, 27, '1 TBSP' ), (4, 28, '1 TBSP' ), (4, 29, '50g' ), (4, 30, '50g' ), (4, 31, '1 TBSP' ),
(4, 32, '1 TBSP' ), (4, 33, '200g' ), (4, 34, '1 Whole' ), (4, 35, '1 TBSP' ), (4, 36, '1 Sliced'),
(4, 37, '1 TBSP Chopped');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (5, 38, '1 Pack' ), (5, 39, '1 TBSP' ), (5, 40, '3 TBPS' ), (5, 31, '2 TBSP' ), (5, 41, '1 TBSP' ),
(5, 5, '1 Clove' ), (5, 42, '1' );

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (6, 43, '1/2 a Head' ), (2, 44, '4-5' ), (2, 45, '3 TBPS' ), (2, 46, '1 Segmented' ), 
(2, 47, '500g' ), (2, 48, '6-8 Small/Medium' ), (2, 49, '1 TSP' );

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (7, 50, '2 Medium' ), (7, 47, '500g' ), (7, 51, '150g' ), (7, 25, '1 TBSP Chopped' ), 
(7, 5, '2 Cloves' ), (2, 53, '2 Beaten' ), (2, 54, '1 TBSP' );

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (8, 55, '6 Large' ), (8, 28, '200g' ), (8, 56, '6 TBPS' ), (8, 57, '300g' ), (8, 58, '200g' ),
(8, 59, '1 TBPS' ), (8, 60, '1 Pack' ), (8, 61, '1 TSP' );

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (9, 54, '2 TBPS' ), (9, 4, '1 Large' ), (9, 62, '2 Sticks' ), (9, 29, '1 Large' ), 
(9, 5, '2 Cloves' ), (9, 63, '3 TBPS' ), (9, 50, '500g' ), (9, 64, '500g' ), (9, 65, '200g Small Shapes' ),
(9, 66, '1 TBPS'), (9, 67, 'Handful'), (9, 2, '400g Tin');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity)
VALUES (10, 33, '500g' ), (10, 31, '2 TBPS' ), (10, 28, '1 TSP' ), (10, 21, '1 TSP' ), (10, 54, '4 TBPS' ),
(10, 5, '3 Cloves' ), (10, 42, '8 Medium' ), (10, 68, '500g' );


-- Allergy Info
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (1, true, false, true, true, false);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (2, true, false, false, false, false);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (3, true, false, false, false, false);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (4, true, false, false, true, false);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (5, false, false, false, false, true);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (6, false, true, false, true, false);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (7, false, true, false, true, false);

INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (8, false, false, true, false, false);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (9, false, false, false, true, true);
INSERT INTO allergy_info (recipe_id, contains_meat, contains_fish, 
contains_alcohol, contains_gluten, is_vegan)
VALUES (10, true, false, false, false, false);

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
(2, 'Chop Romaine and add to a large bowl.', 
'Top the romaine with onion, chickpeas, tomatoes and mozzarella', 
'Add the chillis, peppers and basil.', 
'Stir well before serving, add a dressing of your choice.', '', '', '', '', '', '')

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (3, 'Cut the Breasts into cutlets.', 
'Season the Breasts and cover them in flour.', 
'Fry the Breasts in a pan using the butter.', 
'Once Cooked, remove them from the pan, discard the darkened fat from the pan.', 
'Return pan to the heat, add more butter, and then add garlic.', 
'Add chicken stock and lemon juice to deglaze and allow the liquid to thicken.', 
'Return chicken breasts to the pan to coat them.', 
'Serve with parsley and lemon slices', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (4, 'Mix Vinegar, Sugar and Salt in a bowl, stir in Carrots and Daikon and leave to pickle', 
'Marinate Pork in Soy and Fish Sauce.', 
'Cook the Pork in a pan.', 
'Toast the Baguette', 
'Assemble Sandwich, top with Jalapeños and Coriander', '', '', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (6, 'Zest Lime, add to a bowl with its juice.', 
'Add Cabbage and Radishes and Mix.', 
'Stir Sour Cream in another bowl with remaining Lime Juice', 
'Cook Fish in pan, seasoning with the Cayenne', 
'Heat the Tortillas', 
'Layer the Tortillas with Fish, Coleslaw and Cream', '', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (5, 'Cook Noodles to packet instructions', 
'Prepare sauce by mixing Sesame Oil, Peanut Butter and Soy sauce.', 
'Cover noodles in sauce and garnish with Sesame oil and Spring Onion.', '', '', '', '', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (7, 'Boil and Mash the Potatoes', 
'Simmer the Fish in water until it can be broken apart easily.', 
'Break apart the pieces of fish and then mix it together with the mashed potato and breadcrumbs.', 
'Form the mixtures into cakes and then shallow fry.', '', '', '', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (8, 'Lightly Oil a Baking Dish.', 
'Whisk the Egg Yolks and Sugar Together in a Bowl resting on a simmering saucepan.', 
'Gradually whisk in the Rum and continue to whisk for about 10 more minutes', 
'Whisk in the Mascarpone and Cream', 
'Create a mixture using the rest of the Sugar, the rest of the Rum, some water and the Espresso Powder', 
'Dip the Lady Fingers into the liquid', 
'Assemble and then chill the Tiramisu', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (9, 'Chop all of the vegetables and cook them on a medium-low heat', 
'Add stock, water, pasta and herbs', 
'Add the remaining ingredients except for the spinach', 
'2 Minutes before the soup is done, stir in the spinach', '', '', '', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (10, 'Cut Pork into thin slices and tenderize if necessary.', 
'Marinate the Pork in Soy, Ginger and Flour', 
'Fry the Pork on a High Heat', 
'Add in the chopped Spring Onions', 
'Serve with Rice', '', '', '', '', '');

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