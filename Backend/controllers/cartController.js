const Cart = require("../models/cart");

// Add product to user's cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      throw new Error("Please login to access the cart");
    }

    const { productId, price, quantity } = req.body;

    const existCart = await Cart.findOne({ userId, productId });

    if (existCart) {
      res.json({ message: "Product already exists" });
    }
    const cartItem = new Cart({
      userId,
      productId,
      price,
      quantity,
    });
    await cartItem.save();

    res.status(201).json({ message: "Product added to cart", cartItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View user's cart
const viewCart = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming userId is passed in the request params
    if (!userId) {
      throw new Error("Please login to access the cart");
    }

    const cartItems = await Cart.find({ userId }).populate("productId");
    const cartItemsCount = cartItems.length;
    let total = 0;
    cartItems.forEach((item) => {
      total += item.productId?.price * item.quantity;
    });

    res
      .status(200)
      .json({ totalCartProducts: cartItemsCount, cartTotal: total, cartItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update cart item
// const updateCartItem = async (req, res) => {
//   try {
//     const cartItemId = req.params.id;
//     const updateData = req.body;
//     const updatedCartItem = await Cart.findByIdAndUpdate(cartItemId, updateData, { new: true });
//     if (!updatedCartItem) {
//       return res.status(404).json({ message: 'Cart item not found' });
//     }
//     res.json({ message: 'Cart item updated successfully', updatedCartItem });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
const updateCartItem = async (req, res) => {
  const { _id } = req.user;
  try {

    const cartItemId = req.params.id;
    console.log(req.body);
    // const updateData = req.body;
    const updateData = Number.parseInt(req.body.quantity);
    console.log(req.body);

    const updatedCartItem = await Cart.findOne({
      userId: _id,
      _id: cartItemId,
    });
    if (!updatedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    updatedCartItem.quantity = updateData;
    updatedCartItem.save();
    // const updatedCartItem = await Cart.findByIdAndUpdate(cartItemId, updateData, { new: true });
    res.json({ message: "Cart item updated successfully", updatedCartItem });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove product from cart
const removeCartItem = async (req, res) => {
  try {
    
    const deletedCartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.json({ message: "Cart item deleted successfully", deletedCartItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToCart,
  viewCart,
  updateCartItem,
  removeCartItem,
};
