const mongoose = require("mongoose");
class mongo {
  constructor() {
    this.createMongoConnection();
  }
  createMongoConnection() {
    // mongoose.connect("mongodb://masaiUser:masaipassword@localhost:27017/masai"); //this is for localdatabase
    mongoose.connect(
      "mongodb+srv://SKbhardwaj:Medium1234@cluster0.knqgr.mongodb.net/masai?retryWrites=true&w=majority"
    );
    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDb connection");
    });
  }
}
module.exports = mongo;
