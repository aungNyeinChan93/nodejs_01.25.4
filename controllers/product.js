let products = [
  { name: "phone", price: 4000, amount: 40 },
  { name: "laptop", price: 500, amount: 40 },
  { name: "table", price: 6000, amount: 40 },
  { name: "televison", price: 50000, amount: 400 },
];

const all = (req, res) => {
  res.json({
    message: "success",
    data: products,
  });
};

const create = (req, res) => {
  let newProducts = req.body;
  products.push(newProducts);
  res.json({
    mess: "success",
    result: products,
  });
};

const modify = (req, res, next) => {
  let foundProduct = products.find(
    (product) => product.name === req.params.name
  );
  if (foundProduct) {
    foundProduct.price = Number(req.params.price);
    res.json({ mess: "success price update", result: products });
  } else {
    next(new Error("Product is not found!"));
  }
};

const destroy = (req, res) => {
  if (products.find((p) => p.name === req.params.name)) {
    products = products.filter((p) => p.name != req.params.name);
    res.json({
      mess: "success delete",
      result: products,
    });
  } else {
    res.json({ result: "Products is not found!" });
  }
};

module.exports = {
  all,
  create,
  modify,
  destroy,
};
