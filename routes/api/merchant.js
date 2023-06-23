const express = require("express");
const { becomeMerchant } = require("../../controllers/merchantControllers");
const _ = express.Router();

_.post("becomemerchant", becomeMerchant);

module.exports = _;
