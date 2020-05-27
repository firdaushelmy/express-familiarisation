//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>meow meow</h1>")
});

app.get("/contact", function (req, res) {
  res.send("<h1>send me an email at meow@meow.com</h1>")
});

app.get("/about", function (req, res) {
  res.send("<h2>I own this page mishzz</h2>")
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>swimswim</li><li>beer</li><li>sleeping</li></ul>")
});

app.listen(3000, function () {
  console.log("Server has started on port 3000")
})