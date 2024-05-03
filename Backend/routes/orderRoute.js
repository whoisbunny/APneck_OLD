// routes/orderRoutes.js

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");


// Create a new order
router.post("/", authMiddleware
, orderController.createOrder);

// Get orders by user ID
router.get("/user", authMiddleware, orderController.getOrdersByUser);
// Get orders by user ID
router.get("/:userId", authMiddleware,isAdmin, orderController.getOrdersByUser);
// Get orders 
router.get("/", authMiddleware, isAdmin, orderController.getOrders);

module.exports = router;
