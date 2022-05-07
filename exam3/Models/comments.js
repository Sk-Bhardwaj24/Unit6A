const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  body: { type: String, required: true },
  timestamps: { type: String, required: true },
});

module.exports = mongoose.model("comment", comment);
