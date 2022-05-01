const userModel = require("../Models/user");
const { default: mongoose } = require("mongoose");
const emailservice = require("../Notification/Emailservice");
async function registeruser(req, res, next) {
  console.log("hi");
  try {
    let userDetail = req.body;

    console.log(req.body);
    let response = await userModel.insertMany([userDetail]);
    await sendconfirmaition(req.body);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}
async function sendconfirmaition(data) {
  emailservice.sendMail({
    from: '"ABC system" <me24.saurabhkumar@gmail.com>', // sender address
    to: `${data.email}`, // list of receivers
    subject: ` Welcome to ABC system ${data.first_name} ${data.last_name}`, // Subject line
    text: `Hi ${data.first_name} Please confirm your email address`, // plain text body
    html: `Hi ${data.first_name} Please confirm your email address`,
  });
  await sendtoAdmin(data);
}
async function sendtoAdmin(data) {
  emailservice.sendMail({
    from: '"ABC system" <me24.saurabhkumar@gmail.com>', // sender address
    to: "saurabh@gmail.com,saurabhkumar@mail.in,amitsingh@gmail.com,anmol@redif,com,shreyasingh.me24@gmail.com", // list of receivers
    subject: `${data.first_name} ${data.last_name} has registered with us`, // Subject line
    text: `Please welcome ${data.first_name} ${data.last_name}`, // plain text body
    html: `Please welcome ${data.first_name} ${data.last_name}`,
  });
}
async function getuser(req, res, next) {
  let pageNo = req.query.pageNo;
  let pageSize = req.query.pageSize;
  if (pageSize == undefined) {
    pageSize = 100;
  }

  let skip = (pageNo - 1) * pageSize || 0;

  const limit = req.query.limit || pageSize;
  let alluser = await userModel.find({}).skip(skip).limit(limit);
  res.json(alluser);
}
module.exports = {
  registeruser,
  getuser,
};
