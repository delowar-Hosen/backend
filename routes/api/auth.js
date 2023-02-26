const express = require("express");
const _ = express.Router();
const User = require("../../models/user.js");
//QjfvnZJD7OihaJny

//backend-test

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
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = _;
