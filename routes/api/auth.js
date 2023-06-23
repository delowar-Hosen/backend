const express = require("express");
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const otpCodeChecker = require("../../controllers/otpCodeChecker");
const { becomeMerchant } = require("../../controllers/merchantControllers");
const _ = express.Router();

_.post("/registration", registrationController);
_.post("/login", loginController);
_.post("/otpcheck", otpCodeChecker);
_.post("/merchant", becomeMerchant);

// _.post("/registration", async (req, res) => {
//   const { email, phoneNumber, firstName, lastName, password } = req.body;

//   if (!email) {
//     return res.json({ error: "You Must Give An Email" });
//   }
//   if (!firstName) {
//     return res.json({ error: "You Must Give A Firstname" });
//   }
//   if (!lastName) {
//     return res.json({ error: "You Must Give A Lastname" });
//   }
//   if (!password) {
//     return res.json({ error: "You Must Give A Password" });
//   }

//   const user = new User({
//     email,
//     phoneNumber,
//     firstName,
//     lastName,
//     password,
//   });

//   user.save();

//   let username = user.firstName + user.lastName;

//   let token = jwt.sign(
//     { email: user.email },
//     "gfgdgsfdsdfvewafdfghjkmdt156415",
//     { expiresIn: "30m" }
//   );

//   sendVerificationEmail(user.email, username, token);

//   res.json(user);
// });

module.exports = _;
