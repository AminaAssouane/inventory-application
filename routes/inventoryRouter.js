// routes/inventoryRouter.js
const { Router } = require("express");
const inventoryRouter = Router();
const inventoryController = require("../controllers/inventoryController");

// READING
inventoryRouter.get("/", inventoryController.homepage);
inventoryRouter.get("/categories", inventoryController.getAllCategories);
inventoryRouter.get("/categories/:id", inventoryController.getCategory);
inventoryRouter.get("/items", inventoryController.getAllItems);
inventoryRouter.get("/items/:id", inventoryController.getItemById);

// CREATING
inventoryRouter.get("/createCategory", inventoryController.createCategoryGet);
inventoryRouter.post("/createCategory", inventoryController.createCategoryPost);
inventoryRouter.get("/createItem", inventoryController.createItemGet);
inventoryRouter.post("/createItem", inventoryController.createItemPost);

// UPDATING

// DELETING

module.exports = inventoryRouter;
