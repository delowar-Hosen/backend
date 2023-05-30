const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "waiting",
      enum: ["waiting,rejected,aproved"],
    },
    subCategory: {
      type: Schema.Types.ObjectId,
      ref: "subCategory",
    },
    updated: {
      type: Date,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categoryModel);
