const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("../Controllers/user");
// console.log(userController.getMaster());
app.use(bodyParser.json([]));

app.get("/customer/masterAccount", userController.getMaster);
app.post("/customer/createsaving", userController.createsavingAccount);
app.post("/createuser", userController.createuser);

module.exports = app;
