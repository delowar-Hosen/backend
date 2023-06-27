const express = require("express");
const {
  secureProduct,
  createProduct,
  createVariant,
} = require("../../controllers/productControllers");
const _ = express.Router();

_.post("/secureproduct", secureProduct, createProduct);
_.post("/createproduct", createProduct);
_.post("/createvariant", createVariant);

module.exports = _;
