let categories = [
  { name: "Electronic", id: 1 },
  { name: "TV", id: 2 },
  { name: "Phone", id: 3 },
  { name: "Material", id: 4 },
];

const all = (req, res) => {
  res.json({
    message: "ALl Categories",
    result: categories,
  });
};

const detail = (req, res) => {
  let category = categories.find((c) => c.id === Number(req.params.id));
  res.json({
    message: "Detail Category",
    result: category,
  });
};

const create = (req, res) => {
  let newCategory = req.body;
  categories.push(newCategory);
  res.json({
    message: "Create Category",
    result: categories,
  });
};

const modify = (req, res, next) => {
  let newCategory = req.params.name;
  let foundCategory = categories.find((c) => c.id === Number(req.params.id));
  if (foundCategory) {
    foundCategory.name = newCategory;
    res.json({ message: "modify success", result: categories });
  } else {
    next(new Error("Category is not match"));
  }
};

const destroy = (req, res, next) => {
  if (categories.find((c) => c.id === Number(req.params.id))) {
    categories = categories.filter((c) => c.id !== Number(req.params.id));
    res.json({ message: "destroy success", result: categories });
  } else next(new Error("Category is not found!"));
};

module.exports = {
  all,
  detail,
  create,
  modify,
  destroy,
};
