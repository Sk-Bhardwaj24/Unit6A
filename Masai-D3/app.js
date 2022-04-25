// API/END POINT/URL/ROUTE//PATH

const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./Utility/logger");
//Logger
app.use((request, response, next) => {
  let time = new Date();
  console.log(time + " " + request.url);
  next();
});
//Wrting logs in file
app.use((request, response, next) => {
  logger.info("This is information log");
  logger.error("This is the error log");
  logger.warn("This is the warn log");
  next();
});

let whiteListOrigin = ["http://localhost:9008"];
let corsOption = {
  origin: (origin, callback) => {
    if (whiteListOrigin.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Origin Not Allowed"));
    }
  },
};
app.use(cors(corsOption));

app.get("/user", (request, response, next) => {
  console.log("We are in Middleware two");

  response.send("Success");
});
app.post("/create-user", (request, response, next) => {
  console.log("We are in Middleware two");
  response.status(500).json({ error: "Some error occured" });
});

module.exports = app;
