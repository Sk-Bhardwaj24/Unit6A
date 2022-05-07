const userModel = require("../Models/user");
const booksmodel = require("../Models/book");
const commentsModel = require("../Models/comments");
async function getAllUser(req, res, next) {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
}

async function createUser(req, res, next) {
  //fetch info from request body
  try {
    let userDetails = req.body;
    let response = userModel.insertMany([userDetails]);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
}
async function createbook(req, res, next) {
  try {
    let booksdetails = req.body;
    let response = booksmodel.insertMany([booksdetails]);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
}
async function createcomments(req, res, next) {
  try {
    let commentsdetails = req.body;
    let response = commentsModel.insertMany([commentsModel]);
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
