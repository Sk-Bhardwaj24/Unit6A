const express = require("express");
const app = express();
const userController = require("../controllers/user");

const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(__dirname);
    cb(null, `${__dirname}/public`);
  },
  filename: function (req, file, cb) {
    console.log(file);
    const ext = file.mimetype.split("/")[1];
    //jpeg
    if (ext != "jpeg") {
      cb(new Error("format not accept"));
    }
    cb(null, `/public-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: diskStorage,
});
app.post("/register", upload.single("file"), userController.createUser);
app.post("/books", userController.createbook);
app.post("/comments", userController.createcomments);
module.exports = app;
