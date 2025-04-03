const express = require("express");

const productRouter = express.Router();
const ProductController = require("../controllers/product");

productRouter.use("/", (req, res, next) => {
  console.log(`Products middleware !`);
  next();
});

productRouter.get("/", ProductController.all);

productRouter.post("/", ProductController.create);

productRouter.patch("/:name/:price", ProductController.modify);

productRouter.delete("/:name", ProductController.destroy);

module.exports = productRouter;
