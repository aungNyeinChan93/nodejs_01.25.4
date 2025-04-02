const express = require("express");

const userRoute = express.Router();

let users = [
  { id: 1, name: "mgmg", role: "staff", status: false },
  { id: 2, name: "koko", role: "sale", status: false },
  { id: 3, name: "susu", role: "programmer", status: true },
  { id: 4, name: "kyaw kyaw", role: "mkt", status: false },
  { id: 5, name: "tun tun", role: "designer", status: true },
];

userRoute.get("/", (req, res) => {
  res.json({
    message: "All Users",
    result: users,
    status: 200,
  });
});

userRoute.get("/show/:id", (req, res) => {
  let user = users.find((user) => user.id === Number(req.params.id));
  user
    ? res.json({
        message: "success",
        status: "200",
        user: user,
      })
    : res.json({
        status: 400,
      });
});

userRoute.post("/create", (req, res) => {
  let newUser = req.body;
  // users.push(newUser);
  users = [...users, newUser];
  res.json({
    message: "success",
    status: "200",
    user: users,
  });
});

userRoute.put("/:id", (req, res) => {
  let foundUser = users.find((user) => user.id === Number(req.params.id));
  if (foundUser) {
    Object.assign(foundUser, req.body);
    res.json({
      message: "success",
      status: "200",
      user: users,
    });
  } else {
    res.json({
      mess: "User is not found!",
    });
  }
});

userRoute.delete("/:id", (req, res) => {
  let user = users.find((u) => u.id === parseInt(req.params.id));

  if (user) {
    users = users.filter((u) => u != user);
    res.json({
      message: "Delete success",
      status: "200",
      user: user,
    });
  } else {
    res.json({
      mess: "User is not found!",
    });
  }
});
module.exports = userRoute;
