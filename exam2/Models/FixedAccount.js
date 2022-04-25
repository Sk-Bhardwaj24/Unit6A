const mongoose = require("mongoose");
const FixedAccount = new mongoose.Schema({
  account_number: { type: String, required: true },
  balance: { type: String, required: true },
  interestRate: { type: String, required: true },
  startDate: { type: String, required: true },
  maturityDate: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});
module.exports = mongoose.model("FixedAccount", FixedAccount);
