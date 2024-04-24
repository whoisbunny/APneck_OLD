// routes/orderRoutes.js

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Create a new order
router.post("/", orderController.createOrder);

// Get orders by user ID
router.get("/user", orderController.getOrdersByUser);

module.exports = router;
