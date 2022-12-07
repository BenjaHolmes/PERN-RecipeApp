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
INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
step_8, step_9, step_10)
VALUES (1, 'Sauté the Onions and Garlic until translucent.',
 'Add the Beef and cook until browned.',
 'Add the Tomatoes, Worchester Sauce, Stock Cubes and simmer for 20 mins',
 'With ten minutes of simmer remaining, cook the spaghetti in boiling water', 
 'Serve after adding Salt and Pepper.', 
 '', '', '', '', '');

INSERT INTO recipe_steps (recipe_id, step_1, step_2, step_3, step_4, step_5, step_6, step_7,
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

--Comments
INSERT INTO comments (body, user_id, recipe_id)
VALUES ('This Recipe was Lovely! I''ll be making this every week!', 4, 1)
INSERT INTO comments (body, user_id, recipe_id)
VALUES ('My kids cleaned their plates!!', 5, 1)

--SubComments
INSERT INTO subcomments (body, main_comment_id, user_id)
VALUES ('Great comment Gary1, convinced me to try it :)', 1, 6)
INSERT INTO subcomments (body, main_comment_id, user_id)
VALUES ('Agreed, im going to have it tonight!', 1, 7);
INSERT INTO subcomments (body, main_comment_id, user_id)
VALUES ('Such a novel idea.', 2, 8);

--Articles
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Emulsifiers', 'Should we be Avoiding Them?', 
'https://www.bbc.co.uk/food/articles/emulsifiers', 'https://ichef.bbci.co.uk/images/ic/688xn/p0dbrrk9.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Budget Vegan', 'Meal Plan for Two', 
'https://www.bbc.co.uk/food/articles/vegan_budget_meal_plan_for_two', 'https://ichef.bbci.co.uk/images/ic/688xn/p0dlwjxr.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Christmas Dinner', 'Hacks to Save Energy',
'https://www.bbc.co.uk/food/articles/reduce_christmas_energy_spend', 'https://ichef.bbci.co.uk/images/ic/688xn/p0dh2qnp.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('£1 Meals', 'Family Meal Plan', 
'https://www.bbc.co.uk/food/articles/budget_family_meal_plan_for_four', 'https://ichef.bbci.co.uk/images/ic/688xn/p0d4ngbl.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Flavour Bombs', 'Liven up your Food', 
'https://www.bbc.co.uk/food/articles/flavour_bombs', 'https://ichef.bbci.co.uk/images/ic/688xn/p0d553yd.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Nice Rice!', 'How to Cook a Perfect Risotto', 
'https://www.bbc.co.uk/food/articles/perfect_risotto', 'https://ichef.bbci.co.uk/images/ic/1376x774/p0czvy55.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Pregnancy', 'What Foods to Avoid', 
'https://www.bbc.co.uk/food/articles/what_you_should_and_shouldnt_eat_in_pregnancy', 'https://ichef.bbci.co.uk/images/ic/688xn/p0638q2t.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Cheese', 'Five Unbelieveable Uses', 
'https://www.bbc.co.uk/food/articles/unbelievable_cheese', 'https://ichef.bbci.co.uk/images/ic/688xn/p0c7w1ll.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Perfect Oven Chips', 'The Big Secret', 
'https://www.bbc.co.uk/food/articles/Perfect_oven_chips', 'https://ichef.bbci.co.uk/images/ic/688xn/p0cg1h92.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Social Eating', 'To Help beat Lonliness', 
'https://www.bbc.co.uk/food/articles/eating_together', 'https://ichef.bbci.co.uk/images/ic/688xn/p0c58dcm.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Gluten-Free Baking', 'Top Tips Revealed', 
'https://www.bbc.co.uk/food/articles/tips_for_gluten-free_baking', 'https://ichef.bbci.co.uk/images/ic/688xn/p062h6rv.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Foraging Safely', 'How to do so next Spring', 
'https://www.bbc.co.uk/food/articles/urban_foraging', 'https://ichef.bbci.co.uk/images/ic/688xn/p0bznfy2.jpg')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Wall-Crawling Menace!', 'Jameson Ups Reward for Pictures of Spider-Man', 
'https://www.thedailybugle.net/', 'https://png.pngitem.com/pimgs/s/631-6315006_daily-bugle-black-and-white-hd-png-download.png')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('Meal Times', 'Have we got them all wrong?', 
'https://www.bbc.co.uk/food/articles/eating_times', 'https://ichef.bbci.co.uk/images/ic/688xn/p0bpnzxf.jpg')

INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('', '', '', '')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('', '', '', '')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('', '', '', '')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('', '', '', '')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('', '', '', '')
INSERT INTO articles (title, subtitle, site_url, pic_url)
VALUES ('', '', '', '')







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

-- Get 1 Recipes' data, allergens and steps.
SELECT * FROM recipes 
JOIN allergy_info ON
allergy_info.recipe_id = recipes.id
JOIN recipe_steps ON
recipe_steps.recipe_id = recipes.id
WHERE recipes.id = 1;

-- Get the Ingredients and amounts of one recipe.
SELECT * FROM recipes 
JOIN recipe_ingredients ON
recipes.id = recipe_ingredients.recipe_id
JOIN ingredients ON
recipe_ingredients.ingredient_id = ingredients.id
WHERE recipes.id = 1;

--Adding On Delete Cascade
ALTER TABLE recipe_steps
ADD constraint "recipe_steps_recipe_id_fkey"
FOREIGN KEY (recipe_id)
REFERENCES recipes(id)
ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE allergy_info
ADD constraint "allergy_info_recipe_id_fkey"
FOREIGN KEY (recipe_id)
REFERENCES recipes(id)
ON DELETE CASCADE ON UPDATE NO ACTION;

-- Get a Recipe's Comments
SELECT * FROM comments 
JOIN users ON users.id = comments.user_id
WHERE recipe_id = 1