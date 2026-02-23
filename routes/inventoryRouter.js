// routes/inventoryRouter.js
const { Router } = require("express");
const inventoryRouter = Router();

// Homepage
inventoryRouter.get("/", (req, res) => {
  res.send("Homepage");
});

// Categories
inventoryRouter.get("/categories", (req, res) => {
  res.send("Categories");
});

inventoryRouter.get("/categories/:id", (req, res) => {
  res.send("Category");
});

// Items
inventoryRouter.get("/items", (req, res) => {
  res.send("Items");
});

inventoryRouter.get("/items/:id", (req, res) => {
  res.send("Item");
});

module.exports = inventoryRouter;
