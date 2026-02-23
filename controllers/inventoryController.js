//controllers/inventoryController.js

function homepage(req, res) {
  res.render("home");
}

function getCategories(req, res) {
  res.render("categories");
}

function getCategory(req, res) {
  const id = req.params.id;
  res.render("category", { id: id });
}

function getItems(req, res) {
  res.render("items");
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
