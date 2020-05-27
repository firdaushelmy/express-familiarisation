//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>meow meow</h1>")
});

app.get("/about", function (req, res) {
  res.send("<h2>I own this page mishzz</h2>")
});

app.listen(3000, function () {
  console.log("Server has started on port 3000")
})