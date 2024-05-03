const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const { authMiddleware } = require("../middleware/authMiddleWare");

router.post("/checkout",authMiddleware, paymentController.checkout);

router.post(
  "/paymentverification",
  authMiddleware,
  paymentController.paymentVerification
);

module.exports = router;
