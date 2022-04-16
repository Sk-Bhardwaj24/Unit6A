const { request, response } = require("express");
const express = require("express");
const app = express();
app.get("/", (request, response, next) => {
  console.log("we are in home route");
  response.send("hallo");
});
app.get("/books", (request, response, next) => {
  console.log("we are in book");
  //   response.send("success1");
  response.json({
    "Concept of physics":
      "The book Concepts of Physics is written by Dr H C Verma and published by Bharati Bhavan.",
    "C in Depth":
      "This book is very useful for a beginner as well as intermediate learners",
    " Introduction to Algorithms by Thomas H. Cormen":
      "This is one of the most popular algorithm books, but be aware that it contains a heavy dose of theory. The current edition of this book is the 3rd Edition, and the 4th Edition is coming soon.",
    "The Algorithm Design Manual by Steve S. Skiena":
      "This is another excellent book on computer algorithms that go over a ton of algorithms with a lot of code as well",
  });
});
module.exports = app;
