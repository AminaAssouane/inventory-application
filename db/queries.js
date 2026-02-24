const pool = require("./pool");

// READING

async function getAllCategories() {
  const { rows } = await pool.query("SELECT category FROM categories");
  return rows;
}

async function getCategory(id) {
  const { rows } = await pool.query(
    "SELECT category FROM categories WHERE id = $1",
    [id],
  );
  return rows[0] || null;
}

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM jewels");
  return rows;
}

async function getItemById(id) {
  const { rows } = await pool.query("SELECT * FROM jewels WHERE id = $1", [id]);
  return rows[0] || null;
}

// CREATING

async function createCategory(name) {
  await pool.query("INSERT INTO categories (category) VALUES ($1)", [name]);
}

module.exports = {
  getAllItems,
  getAllCategories,
  getCategory,
  getItemById,
  createCategory,
};
