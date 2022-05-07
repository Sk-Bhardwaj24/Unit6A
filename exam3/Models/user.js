const mongoose = require("mongoose");

const user = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 30 },
  lastName: { type: String, minlength: 3, maxlength: 30 },
  age: { type: Number, required: true, min: 1, max: 150 },

  email: { type: String, required: true, unique: true },
  profileImages: { type: String, required: true },
  timestamps: { type: String, required: true },
});

module.exports = mongoose.model("user", user);
