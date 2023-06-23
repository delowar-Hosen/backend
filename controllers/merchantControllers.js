const storeModel = require("../models/storeModel");
const User = require("../models/user");

exports.becomeMerchant = async (req, res) => {
  const { storeName, owner, officeMail, officePhone, officeAddress, products } =
    req.body;

  const store = new storeModel({
    storeName,
    owner,
    officeMail,
    officePhone,
    officeAddress,
    products,
  });
  store.save();
  res.send(store);

  await User.findOneAndUpdate(
    { _id: owner },
    { role: "Merchant" },
    { merchant: true },
    { new: true }
  );
};
