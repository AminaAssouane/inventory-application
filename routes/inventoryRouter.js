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

// Items
inventoryRouter.get("/items", (req, res) => {
  res.send("Items");
});

module.exports = inventoryRouter;
