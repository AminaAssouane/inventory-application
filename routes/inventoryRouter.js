// routes/inventoryRouter.js
const { Router } = require("express");
const inventoryRouter = Router();
const inventoryController = require("../controllers/inventoryController");

// Homepage
inventoryRouter.get("/", inventoryController.homepage);

// Categories
inventoryRouter.get("/categories", inventoryController.getAllCategories);

inventoryRouter.get("/categories/:id", inventoryController.getCategory);

// Items
inventoryRouter.get("/items", inventoryController.getItems);

inventoryRouter.get("/items/:id", inventoryController.getItemById);

module.exports = inventoryRouter;
