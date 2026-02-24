const db = require("../db/queries");

// READING

function homepage(req, res) {
  res.render("home");
}

async function getAllCategories(req, res) {
  try {
    const categories = await db.getAllCategories();
    res.render("categories", { categories: categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getCategory(req, res) {
  const id = req.params.id;
  try {
    const category = await db.getCategory(id);
    if (!category) {
      return res.status(404).send("Category not found");
    }
    console.log("Category: ", category.category);
    res.render("category", { category });
  } catch (error) {
    console.error("Error fetching category: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllItems(req, res) {
  try {
    const items = await db.getAllItems();
    res.render("items", { items });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

async function getItemById(req, res) {
  const id = req.params.id;
  try {
    const item = await db.getItemById(id);
    if (!item) {
      return res.status(500).send("Item not found.");
    }
    console.log("Item : ", item);
    res.render("item", { item });
  } catch (error) {
    console.error("Error fetching item: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// CREATING
function createCategoryGet(req, res) {
  res.render("createCategory");
}

async function createCategoryPost(req, res) {
  const category = req.body.category;
  await db.createCategory(category);
  res.redirect("/categories");
}

function createItemGet(req, res) {
  res.render("createItem");
}

async function createItemPost(req, res) {
  const { jewel, category_id, quantity, price } = req.body;
  const categoryId = parseInt(category_id, 10);
  const qty = parseInt(quantity, 10);
  const prc = parseInt(price, 10);
  await db.createItem(jewel, categoryId, qty, prc);
  res.redirect("/items");
}

module.exports = {
  homepage,
  getAllCategories,
  getCategory,
  getAllItems,
  getItemById,
  createCategoryGet,
  createCategoryPost,
  createItemGet,
  createItemPost,
};
