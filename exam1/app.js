const express = require("express");
const app = express();

const logger = require("./Utility/logger");

app.use((request, response, next) => {
  logger.info(`This is ${request.path} route`);

  next();
});

app.get("/books", (request, response, next) => {
  console.log("We are in books router");

  response.json({
    "The Art of Living - A Guide to Contentment, Joy and Fulfilment":
      "The Dalai Lama is one of the most beloved spiritual leaders of our age. In this book, he brings his wisdom and practical advice on how anyone (Buddhists as well as people from all faiths or none) can live a meaningful, joyful life.",
  });
});

app.get("/authors", (request, response, next) => {
  console.log("We are in /authors route");

  response.json({
    "The Art of Living - A Guide to Contentment, Joy and Fulfilment":
      "The Dalai Lama",
  });
});

app.get("/libraries", (request, response, next) => {
  console.log("We are in /libraries route");
  response.send("/libraries");
});

module.exports = app;
