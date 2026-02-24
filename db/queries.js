const pool = require("./pool");

// READING
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategory(id) {
  const { rows } = await pool.query(
    "SELECT id, category FROM categories WHERE id = $1",
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

async function createItem(jewel, category_id, quantity, price) {
  await pool.query(
    "INSERT INTO jewels (jewel, category_id, quantity, price) VALUES ($1, $2, $3, $4)",
    [jewel, category_id, quantity, price],
  );
}

// UPDATING
async function updateCategory(category, id) {
  await pool.query("UPDATE categories SET category = $1 WHERE id = $2", [
    category,
    id,
  ]);
}

module.exports = {
  getAllItems,
  getAllCategories,
  getCategory,
  getItemById,
  createCategory,
  createItem,
  updateCategory,
};
