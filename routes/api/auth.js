const express = require("express");
const _ = express.Router();
const User = require("../../models/user.js");

_.post("/registration", (req, res) => {
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
});

module.exports = _;
