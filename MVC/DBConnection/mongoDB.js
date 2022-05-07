const mongoose = require("mongoose");

class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      `mongodb+srv://masaiUser:MRNd405MkhMzT48T@cluster1.j5h2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    // mongoose.connect("mongodb://masaiUser:masaipassword@localhost:27017/masai"); //this is for localdatabase

    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDB connection");
    });
  }
}

module.exports = Mongo;
