require("dotenv").config();
const User = require("../models/user");

exports.secureProduct = async (req, res, next) => {
  //   console.log(req.headers.authorization.split('@')[0]);
  let userId = req.headers.authorization.split("@")[1];
  let password = req.headers.authorization.split("@")[2];

  if (!req.headers.authorization) {
    return res.json({ error: "Unauthorised" });
  }

  let check = await User.find({ _id: userId });

  if (check.length > 0) {
    if (password == process.env.MERCHANT_SECRET_KEY) {
      if (check[0].role == "merchant") {
        next();
      }
    } else {
      return res.json({ error: "You are not able to add product" });
    }
  } else {
    return res.json({ error: "You are not able to add product" });
  }
};

exports.createProduct = async (req, res) => {
  return res.json({ success: "You are illigble" });
};
