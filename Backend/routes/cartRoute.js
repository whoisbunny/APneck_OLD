const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { authMiddleware } = require("../middleware/authMiddleWare");

// Route to get user's cart
router.get("/", authMiddleware, cartController.getCart);

// Route to add item to cart
router.post("/", authMiddleware, cartController.addToCart);

// Route to remove item from cart
router.delete(
  "/:productId",
  authMiddleware,
  cartController.removeFromCart
);

module.exports = router;
