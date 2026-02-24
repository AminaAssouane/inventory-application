const db = require("../db/queries");

function homepage(req, res) {
  res.render("home");
}

function getCategories(req, res) {
  res.render("categories");
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

async function getItems(req, res) {
  const items = await db.getAllNames();
  res.send("items : " + items.map((item) => item.name).join(" & "));
}

function getItemById(req, res) {
  const id = req.params.id;
  res.render("item", { id: id });
}

module.exports = {
  homepage,
  getCategories,
  getCategory,
  getItems,
  getItemById,
};
