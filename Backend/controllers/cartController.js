const CART = require("../models/cart");

// Controller to get user's cart
exports.getCart = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have authentication middleware to add user to req object
    const cart = await CART.findOne({ userId }).populate(
      "items.productId",
      "name price image"
    );
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to add item to cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have authentication middleware to add user to req object
    const { productId, quantity } = req.body;

    let cart = await CART.findOne({ userId });

    if (!cart) {
      cart = new CART({ userId, items: [] });
    }

    const index = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (index !== -1) {
      cart.items[index].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have authentication middleware to add user to req object
    const productId = req.params.productId;

    const cart = await CART.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
