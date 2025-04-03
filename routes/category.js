const express = require("express");

const route = express.Router();

const categoeyController = require("../controllers/category");

// middleware
route.use("/", (req, res, next) => {
  console.log(`${route.name}`);
  next();
});

// all categories
route.get("/", categoeyController.all);

// get category
route.get("/:id", categoeyController.detail);

// create category
route.post("/", categoeyController.create);

// update category
route.patch("/:id/:name", categoeyController.modify);

// destroy category
route.delete("/:id", categoeyController.destroy);

module.exports = route;
