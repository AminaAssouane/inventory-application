//db/populatedb.js
const { Client } = require("pg");

// Creating tables
const createCategoriesTable = `CREATE TABLE categories (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 255 ))`;

const createItemsTable = `CREATE TABLE jewels (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
name VARCHAR (255), category_id INTEGER, quantity INTEGER, price INTEGER )`;

// Populating tables
const createCategoriesData = `INSERT INTO categories (category) VALUES 
('Gemstone'), ('Necklace), ('Bracelet'), ('Ring')`;

const createItemsData = `INSERT INTO jewels (name, category_id, quantity, price) VALUES
('Ruby', 1, 4, 255), ('Flowery pendant', 2, 11, 23), ('Friendship bracelet', 3, 55, 7), ('Diamond ring', 4, 2, 1432)`;
