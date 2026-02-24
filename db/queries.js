const pool = require("./pool");

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

module.exports = { getAllItems, getAllCategories, getCategory, getItemById };
