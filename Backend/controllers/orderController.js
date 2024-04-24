// controllers/orderController.js

const ORDER = require("../models/order");

exports.createOrder = async (req, res) => {
  const userId = req?.user?._id;
  const { items, total } = req.body;

  try {
    const newOrder = new ORDER({
      userId,
      items,
      total,
    });

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  //   const { userId } = req.params;
  const userId = req.user._id;
  try {
    const orders = await ORDER.find({ userId }).populate("items.productId");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
