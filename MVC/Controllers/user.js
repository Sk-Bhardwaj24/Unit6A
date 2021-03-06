const userModel = require("../Models/user");
const parentModel = require("../Models/parents");
const { default: mongoose } = require("mongoose");
async function getAllUser(req, res, next) {
  try {
    let response = await userModel.find({});
    console.log(response[0].firstName);
    // .populate("employeId", { firstName: 1 });
    // res.json(response);
    res.render("home", { name: `${response[0].firstName}`, age: 25 });
  } catch (error) {
    res.status(500).json(error);
  }
  // res.send("hallo");
}

async function createUser(req, res, next) {
  //fetch info from request body
  try {
    // console.log("req.body", req.body);
    let userDetail = req.body;
    let response = await userModel.insertMany([userDetail]);
    console.log(response);
    let parentInfo = {
      empId: response[0]._id,
      firstName: req.body.parents.firstName,
      lastName: req.body.parents.lastName,
      age: req.body.parents.age,
      phoneNo: req.body.parents.phoneNo,
    };
    console.log(parentInfo);
    await parentModel.insertMany([parentInfo]);

    res.json(response);
  } catch (error) {
    res.json(error);
  }
}

async function getUserById(req, res, next) {
  let userId = req.params.userId;
  let response = await userModel.find({ _id: userId });
  //   res.render("home", {
  //     name: `${response[0].firstName}`,
  //     age: `${response[0].age}`,
  //   });
  res.json(response[0]);
}

async function deleteUser(req, res, next) {
  let userId = req.params.userId;
  let response = await userModel.deleteOne({ _id: userId });
  res.json(response);
}

async function updateUser(req, res, next) {
  let userId = req.params.userId;
  let body = req.body;
  let response = await userModel.updateOne({ _id: userId }, { $set: body });
  res.json(response);
}

async function getParentsInfo(req, res, next) {
  console.log(req.params);
  let response = await parentModel
    .find({
      empId: mongoose.Types.ObjectId(req.params.empId),
    })
    .populate("empId");
  res.json(response);
}

module.exports = {
  getAllUser,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  getParentsInfo,
};
