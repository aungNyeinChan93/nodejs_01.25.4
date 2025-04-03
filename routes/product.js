const express = require("express");

const productRoute = express.Router();
const ProductController = require("../controllers/product");

productRoute.use("/", (req, res, next) => {
  console.log(`Products middleware !`);
  next();
});

productRoute.get("/", ProductController.all);

productRoute.post("/", ProductController.create);

productRoute.patch("/:name/:price", ProductController.modify);

productRoute.delete("/:name", ProductController.destroy);

module.exports = productRoute;
