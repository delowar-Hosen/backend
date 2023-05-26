const bcrypt = require("bcrypt");
const User = require("../models/user");
const otpTemplate = require("../helpers/otpTemplate");
const sendVerificationEmail = require("../helpers/sendVerificationEmail");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const emailValidation = require("../helpers/emailvalidation");
const nodemailer = require("nodemailer");

const registrationController = async (req, res) => {
  try {
    const { email, phoneNumber, firstName, lastName, password } = req.body;
    if (!email) {
      return res.json({ error: "You Must Give An Email" });
    }

    if (!emailValidation(email)) {
      return res.json({ error: "Give Valid Email Address" });
    }
    if (!firstName) {
      return res.json({ error: "You Must Give A Firstname" });
    }
    if (!lastName) {
      return res.json({ error: "You Must Give A Lastname" });
    }
    if (!password) {
      return res.json({ error: "You Must Give A Password" });
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      const user = new User({
        email,
        phoneNumber,
        firstName,
        lastName,
        password: hash,
      });
      user.save();

      const randomNumber = aleaRNGFactory(new Date());
      const otp = randomNumber.uInt32().toString().substring(0, 4);
      // sendVerificationEmail(email, otp, otpTemplate);
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "delowarhosen154@gmail.com", // generated ethereal user
          pass: "tsjbjptgwmlymcmn", // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: "delowarhosen154@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Oreby Ecomarse Verification Link", // Subject line
        text: "Hello world?", // plain text body
        html: otpTemplate(otp), // html body
      });
      await User.findOneAndUpdate(
        { email },
        { $set: { otpNumber: otp } },
        { new: true }
      );

      setTimeout(async () => {
        await User.findOneAndUpdate(
          { email },
          { $unset: { otpNumber: "" } },
          { new: true }
        );
      }, 30000);
      res.json({
        email: user.email,
        firstName: user.firstName,
        last: user.lastName,
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = registrationController;
