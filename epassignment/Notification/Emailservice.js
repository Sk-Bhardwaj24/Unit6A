const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e33912faf1ac8c",
    pass: "dec34859f4d0aa",
  },
});

module.exports = transport;
