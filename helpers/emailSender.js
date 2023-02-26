const nodemailer = require("nodemailer");

exports.sendVerificationEmail = (email, name, url) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: "tsjbjptgwmlymcmn", // generated ethereal password
    },
  });

  let info = transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: email, // list of receivers
    subject: "Oreby Ecomarse Verification Link", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>${url}</b>`, // html body
  });

  transporter.sendMail(info, (res, err) => {
    if (err) return err;
    return res;
  });
};
