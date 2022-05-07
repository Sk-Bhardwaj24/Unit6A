const mongoose = require("mongoose");
const user = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  // profile_pic: { type: File, require: true },
});
module.exports = mongoose.model("user", user);
