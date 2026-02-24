//db/populatedb.js
const { Client } = require("pg");

// Creating tables
const createCategoriesTable = `CREATE TABLE categories (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 255 ))`;

const createItemsTable = `CREATE TABLE jewels (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
jewel VARCHAR (255), category_id INTEGER REFERENCES categories(id), quantity INTEGER, price INTEGER )`;

// Populating tables
const createCategoriesData = `INSERT INTO categories (category) VALUES 
('Gemstone'), ('Necklace'), ('Bracelet'), ('Ring')`;

const createItemsData = `INSERT INTO jewels (jewel, category_id, quantity, price) VALUES
('Ruby', 1, 4, 255), ('Flowery pendant', 2, 11, 23), ('Friendship bracelet', 3, 55, 7), ('Diamond ring', 4, 2, 1432)`;

async function main() {
  const client = new Client({
    connectionString: "postgresql://aminaassouane:null@localhost:5432/jewelry",
  });
  try {
    await client.connect();
    console.log("Connected to database.");
    await client.query("DROP TABLE IF EXISTS jewels");
    await client.query("DROP TABLE IF EXISTS categories");
    console.log("Tables reset.");
    await client.query(createCategoriesTable);
    await client.query(createItemsTable);
    console.log("Tables created.");
    await client.query(createCategoriesData);
    await client.query(createItemsData);
    console.log("Data created.");
  } catch (error) {
    console.error("Error occured:", error);
  } finally {
    await client.end();
    console.log("Done.");
  }
}

main();
