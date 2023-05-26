const emailValidation = require("../helpers/emailvalidation");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.json({ error: "You Must Give An Email" });
    } else if (emailValidation(email)) {
      return res.json({ error: "Give Valid Email Address" });
    } else if (!password) {
      return res.json({ error: "You Must Give Password" });
    } else {
      let isEmail = await User.find({ email });
      if (isEmail.length > 0) {
        bcrypt.compare(password, isEmail[0].password).then(function (result) {
          if (result) {
            res.json({ message: "Login Successfully" });
          } else {
            res.json({ message: "Give Correct Password" });
          }
        });
      } else {
        res.json({ message: "Email Not Found" });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = loginController;
