const mongoose = require("mongoose");

const books = new mongoose.Schema({
  likes: { type: Number, required: true, min: 0 },
  coverImage: { type: String, required: true },
  content: { type: String, required: true },
  timestamps: { type: String, required: true },
});

module.exports = mongoose.model("books", books);
