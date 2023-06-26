const express = require("express");
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const otpCodeChecker = require("../../controllers/otpCodeChecker");
const { merchantStatus } = require("../../controllers/merchantControllers");
const _ = express.Router();

_.post("/registration", registrationController);
_.post("/login", loginController);
_.post("/otpcheck", otpCodeChecker);
_.post("/merchantstatus", merchantStatus);

module.exports = _;
