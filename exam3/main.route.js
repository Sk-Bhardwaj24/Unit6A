const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRoute = require("./Routes/user");
// const authRoute = require("./Routes/auth");
app.use(bodyParser.json([]));

app.use("/user", userRoute);
// app.use("/auth", authRoute);

module.exports = app;
