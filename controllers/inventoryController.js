const db = require("../db/queries");

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
    console.error("Error fetching category:", error);
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

function getItemById(req, res) {
  const id = req.params.id;
  res.render("item", { id: id });
}

module.exports = {
  homepage,
  getAllCategories,
  getCategory,
  getAllItems,
  getItemById,
};
