const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variantModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },

    optition: [
      {
        type: Schema.Types.ObjectId,
        ref: "Option",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Variant", variantModel);
