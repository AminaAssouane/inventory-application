require("dotenv").config();
const methodOverride = require("method-override");
const express = require("express");
const app = express();
const path = require("node:path");

const inventoryRouter = require("./routes/inventoryRouter");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", inventoryRouter);

const PORT = process.env.port || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port : ${PORT}`);
});
