const express = require("express");
const _ = express.Router();

_.post("/registration", (req, res) => {
  const { email, password, fullname, isSubscribed } = req.body;

  if (!email) {
    return res.json({ error: "You Must Give An Email" });
  }
  if (!fullname) {
    return res.json({ error: "You Must Give A Fullname" });
  }
  if (!password) {
    return res.json({ error: "You Must Give A Password" });
  }

  res.json({ email, password, fullname, isSubscribed });
});

module.exports = _;
