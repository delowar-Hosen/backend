const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeModel = new Schema(
  {
    storeName: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    officeMail: {
      type: String,
      required: true,
    },
    officePhone: {
      type: String,
      required: true,
    },
    OfficeAddress: {
      type: String,
      required: true,
    },
    produts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    updated: {
      type: Date,
      default: Date.now,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", storeModel);
