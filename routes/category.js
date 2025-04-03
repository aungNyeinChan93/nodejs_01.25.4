const express = require("express");

const router = express.Router();

const categoeyController = require("../controllers/category");

// middleware
router.use("/", (req, res, next) => {
  console.log(`${router.name}`);
  next();
});

// all categories
router.get("/", categoeyController.all);

// get category
router.get("/:id", categoeyController.detail);

// create category
router.post("/", categoeyController.create);

// update category
router.patch("/:id/:name", categoeyController.modify);

// destroy category
router.delete("/:id", categoeyController.destroy);

module.exports = router;
