const mongoose = require("mongoose");

const publication = new mongoose.Schema({
  name: { type: String, required: true },
  timestamps: { type: String, required: true },
});

module.exports = mongoose.model("publication", publication);
