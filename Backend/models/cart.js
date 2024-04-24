// const mongoose = require("mongoose");

// const cartSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User", // Reference to the User model
//     required: true,
//   },
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product", // Reference to the Product model
//     required: true,
//   },

//   price: {
//     type: Number,
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     // required: true,
//   },
// });

// const CART = mongoose.model("Cart", cartSchema);

// module.exports = CART;




const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CART = mongoose.model("Cart", cartSchema);

module.exports = CART;