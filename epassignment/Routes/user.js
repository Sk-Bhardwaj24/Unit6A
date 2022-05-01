const express = require("express");
const userController = require("../Controllers/user");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json([]));
app.post("/register", userController.registeruser);

app.get("/alluser", userController.getuser);

module.exports = app;
