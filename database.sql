CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255) NOT NULL
 );
 CREATE TABLE recipes (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100),
  number_of_likes INTEGER,
  number_of_dislikes INTEGER,
  picture_id INTEGER,
  created_by_user BIGSERIAL REFERENCES users(id)
 );
 CREATE TABLE recipe_steps (
  id BIGSERIAL PRIMARY KEY,
  recipe_id BIGSERIAL REFERENCES recipes(id),
  step_1 VARCHAR(255),
  step_2 VARCHAR(255),
  step_3 VARCHAR(255),
  step_4 VARCHAR(255),
  step_5 VARCHAR(255),
  step_6 VARCHAR(255),
  step_7 VARCHAR(255),
  step_8 VARCHAR(255),
  step_9 VARCHAR(255),
  step_10 VARCHAR(255)
 );
 CREATE TABLE allergy_info (
  id BIGSERIAL PRIMARY KEY,
  recipe_id BIGSERIAL REFERENCES recipes(id),
  contains_meat BOOLEAN NOT NULL,
  contains_fish BOOLEAN NOT NULL,
  contains_alcohol BOOLEAN NOT NULL,
  contains_gluten BOOLEAN NOT NULL,
  is_vegan BOOLEAN NOT NULL
 );
CREATE TABLE ingredients (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
);
CREATE TABLE recipe_ingredients (
  recipe_id BIGSERIAL REFERENCES recipes(id),
  ingredient_id BIGSERIAL REFERENCES ingredients(id),
  quantity VARCHAR(50),
  primary key (recipe_id, ingredient_id)
);


--Adding comment tables
CREATE TABLE comments (
    id BIGSERIAL PRIMARY KEY,
    body VARCHAR(255),
    user_id BIGSERIAL REFERENCES users(id) ON DELETE CASCADE,
    recipe_id BIGSERIAL REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE subcomments (
  id BIGSERIAL PRIMARY KEY,
  body VARCHAR(255),
  main_comment_id BIGSERIAL REFERENCES comments(id),
  user_id BIGSERIAL REFERENCES users(id) ON DELETE CASCADE
);

ALTER TABLE subcomments
ADD COLUMN recipe_id BIGSERIAL REFERENCES recipes(id)