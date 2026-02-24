const pool = require("./pool");

async function getAllNames() {
  const { rows } = await pool.query("SELECT name FROM jewels");
  return rows;
}

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

module.exports = { getAllNames, getAllCategories, getCategory };
