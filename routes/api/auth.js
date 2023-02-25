const express = require("express");
const _ = express.Router();

_.post("/registration", (req, res) => {
  const { email, password, fullname, isSubscribed } = req.body;

  if (!email) {
    res.json({ error: "You Must Give An Email" });
  }
  if (!fullname) {
    res.json({ error: "You Must Give An Fullname" });
  }
  if (!password) {
    res.json({ error: "You Must Give An Password" });
  }
});

module.exports = _;
