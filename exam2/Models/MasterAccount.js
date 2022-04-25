const mongoose = require("mongoose");
const MasterAccount = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  // branchIFSC: { type: mongoose.Schema.Types.IFSC, ref: " BranchDetail" },
  balance: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});
module.exports = mongoose.model("MasterAccount", MasterAccount);
