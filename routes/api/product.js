const express = require("express");
const {
  secureProduct,
  createProduct,
} = require("../../controllers/productControllers");
const _ = express.Router();

_.post("/secureproduct", secureProduct, createProduct);

module.exports = _;
