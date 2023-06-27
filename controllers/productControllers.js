require("dotenv").config();
const productModels = require("../models/productModels");
const User = require("../models/user");
const variantModel = require("../models/variantModel");

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
  const { name, description, image, store } = req.body;

  let product = new productModels({
    name,
    description,
    image,
    store,
  });

  product.save();
  res.json(product);
};

exports.createVariant = async (req, res) => {
  const { name, image, product } = req.body;

  let variant = new variantModel({
    name,
    image,
    product,
  });

  variant.save();
  res.json(variant);

  await productModels.findOneAndUpdate(
    { _id: variant.product },
    { $push: { variants: variant._id } },
    { new: true }
  );
};
