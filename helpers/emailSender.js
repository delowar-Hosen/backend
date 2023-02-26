const nodemailer = require("nodemailer");

exports.sendVerificationEmail = (email, name, url) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "delowarhosen154@gmail.com", // generated ethereal user
      pass: "tsjbjptgwmlymcmn", // generated ethereal password
    },
  });

  let info = transporter.sendMail({
    from: "delowarhosen154@gmail.com", // sender address
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
