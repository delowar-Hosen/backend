const express = require("express");
const {
  secureProduct,
  createProduct,
  createVariant,
} = require("../../controllers/productControllers");
const _ = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + `.${file.originalname.split(".")[1]}`);
  },
});

const upload = multer({ storage: storage });

_.post("/secureproduct", secureProduct, createProduct);
_.post("/createproduct", createProduct);
_.post("/createvariant", upload.single("image"), createVariant);

module.exports = _;
