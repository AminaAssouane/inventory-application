const { Router } = require("express");
const inventoryRouter = Router();

// Homepage
inventoryRouter.get("/", (req, res) => {
  res.send("Homepage");
});

module.exports = inventoryRouter;
