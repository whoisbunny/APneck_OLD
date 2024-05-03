const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },

  price: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: { type: String },

  quantity: {
    type: Number,
    required: true,
  },

  ratings: [
    {
      star: Number,
      comment: String,
      postedby: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    },
  ],

  sold: {
    type: Number,
    default: 0,
    // select: false,
  },
  totalratings: { type: String, default: 0 },
});

const PRODUCT = mongoose.model("Product", productSchema);

module.exports = PRODUCT;
