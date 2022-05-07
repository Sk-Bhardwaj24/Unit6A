const userModel = require("../Models/user");
const booksmodel = require("../Models/book");
const commentsModel = require("../Models/comments");
const multer = require("multer");
async function getAllUser(req, res, next) {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
}

async function createUser(req, res, next) {
  // console.log("hi");
  //fetch info from request body

  // var obj = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   age: req.body.age,
  //   email: req.body.email,
  //   timestamps: req.body.timestamps,
  //   desc: req.body.desc,
  //   profileImages: req.file.path

  // };
  console.log(req.file.path);
  try {
    let userDetails = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      timestamps: req.body.timestamps,
      profileImages: req.file.path,
    };
    // console.log(userDetails);
    let response = await userModel.insertMany([userDetails]);
    // console.log(response);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
}
async function createbook(req, res, next) {
  try {
    let booksdetails = req.body;
    let response = await booksmodel.insertMany([booksdetails]);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
}
async function createcomments(req, res, next) {
  try {
    let commentsdetails = req.body;
    let response = await commentsModel.insertMany([commentsModel]);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
}

function saveImage(req, res, next) {
  console.log("Request file", req.file);
  res.json({
    message: "Image saved",
    path: req.file.path,
  });
}

module.exports = {
  getAllUser,
  createUser,
  createbook,
  createcomments,
};
