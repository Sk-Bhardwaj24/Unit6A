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
async function createuser(req, res, next) {
  try {
    let userDetails = req.body;
    console.log(req.body);
    let response = await userModel.insertMany([userDetails]);
    res.send(response);
    res.send("hey");
  } catch (error) {
    // console.log(error);
  }
}
async function createsavingAccount(req, res, next) {
  try {
    let savingDetails = req.body;
    let response = await savingModel.insertMany([savingDetails]);
    res.send(response);
  } catch (error) {
    console.log("error");
  }
}

module.exports = {
  getMaster,
  createsavingAccount,
  createuser,
};
