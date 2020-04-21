const express = require("express");

const app = express();

app.use( (req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use( "/api/posts", (req, res, next) => {
  //res.send("Hello, from Express!");
  res.json()
} );

module.exports = app;
