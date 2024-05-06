const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { authMiddleware } = require("../middleware/authMiddleWare");

// Add product to user's cart
router.post(
  "/",
  authMiddleware,

  cartController.addToCart
);

// View user's cart
router.get("/", authMiddleware, cartController.viewCart);

// Update cart item
router.put("/:id", authMiddleware, cartController.updateCartItem);

// Remove product from cart
router.delete("/:id", authMiddleware, cartController.removeCartItem);

module.exports = router;
