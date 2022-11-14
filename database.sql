CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255) NOT NULL
 );