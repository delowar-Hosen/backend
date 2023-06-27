const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: [
      {
        name: {
          type: String,
          required: true,
        },
        quntity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Option", optionModel);
