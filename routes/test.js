const express = require("express");

const testRoute = express.Router();

testRoute.get("/", (req, res) => {
  res.send("test route");
});

testRoute.get("/:name/:age", (req, res) => {
  let name = req.params.name;
  let age = req.params.age;
  res.json({
    message: "success",
    result: `My name is ${name} . I'm ${age} years old`,
  });
});

module.exports = testRoute;
