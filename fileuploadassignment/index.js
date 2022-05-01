const http = require("http");
const connectToDB = require("./DBConnection/mongoDB");
const app = require("./Routes/users");
const PORT = 9008;
http.createServer(app).listen(PORT, () => {
  new connectToDB();
  console.log(`Server is running on port no ${PORT}`);
});
