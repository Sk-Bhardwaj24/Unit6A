const userModel = require("../Models/user");
const branchModel = require("../Models/BranchDetail");
const fixedAccount = require("../Models/FixedAccount");
const masterModel = require("../Models/MasterAccount");
const savingModel = require("../Models/SavingsAccount");

const { default: mongoose } = require("mongoose");
async function getMaster(req, res, next) {
  try {
    let response = await masterModel.find({});

    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}
// function getMaster(req, res, next) {
//   res.send("hallo");
// }
async function create

module.exports = 