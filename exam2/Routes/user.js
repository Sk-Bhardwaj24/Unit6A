const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("../Controllers/user");
// console.log(userController.getMaster());
// app.use(bodyParser.json([]));

app.get("/customer/masterAccount", userController.getMaster);

module.exports = app;
