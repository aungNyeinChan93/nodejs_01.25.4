const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("node:path");
app.use(express.json());

// routes
const testRoute = require("./routes/test");
const productRouter = require("./routes/product");

// home
app.get("/", (req, res) => {
  // res.sendFile('./view/index.html', { root: __dirname })
  res.sendFile(path.join(__dirname, "/view/index.html"));
});
app.post("/", (req, res) => {
  res.send(`My name is ${req.body.name}.I'm ${req.body.age} years old!`);
});

// testRoute
app.use("/api/test", (req, res, next) => {
  console.log("test middleware");
  next();
});
app.use("/api/test", testRoute);

//productRouter
app.use("/api/products", productRouter);

//
app.listen(port, () => console.log(`Server is running in port ${port}`));
