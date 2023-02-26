const express = require("express");
const { sendVerificationEmail } = require("../../helpers/emailSender.js");
const _ = express.Router();
const User = require("../../models/user.js");
const jwt = require("jsonwebtoken");

_.post("/registration", (req, res) => {
  try {
    const { email, phoneNumber, firstName, lastName, password } = req.body;

    if (!email) {
      return res.json({ error: "You Must Give An Email" });
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

    const user = new User({
      email,
      phoneNumber,
      firstName,
      lastName,
      password,
    });

    user.save();

    let username = user.firstName + user.lastName;

    let token = jwt.sign(
      { email: user.email },
      "Z974a^hT)!Z:]f$%vd>l_l`Wy>EN.)",
      { expiresIn: "30m" }
    );

    sendVerificationEmail(user.email, username, token);

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = _;
