const userModel = require("../Models/user");
async function getAllUser(req, res, next) {
  try {
    let alluser = await userModel.find({});
    res.json(alluser);
  } catch (error) {
    res.json(error);
  }
}
module.exports = {
  getAllUser,
};
