const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.write("hello form ");
  res.send();
});

module.exports = router;
