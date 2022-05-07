const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("../Controller/user");
app.use(bodyParser.json([]));
app.get("/alluser", userController.getAllUser);
module.exports = app;
