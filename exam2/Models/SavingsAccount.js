const mongoose = require("mongoose");
const SavingsAccount = new mongoose.Schema({
  // masterAccountID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "MasterAccount",
  // },
  customerId: { type: String, required: true },
  account_number: { type: String, required: true },
  balance: { type: String, required: true },
  interestRate: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});
module.exports = mongoose.model("SavingAccount", SavingsAccount);
