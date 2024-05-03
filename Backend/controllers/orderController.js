// controllers/orderController.js

const ORDER = require("../models/order");
const PRODUCT = require("../models/product");

exports.createOrder = async (req, res) => {
  const userId = req?.user?._id;
  const { items, total } = req.body;

  try {
    for (const e of items) {
      const product = await PRODUCT.findById(e.productId);
      if (!product || product.quantity < e.quantity) {
        return res.status(400).json({
          message: `Product with quantity ${
            e.quantity
          } is not available for purchase, we have only ${
            product?.quantity || 0
          } quantity in the store`,
        });
      } else {
        product.sold += e.quantity;
        product.quantity -= e.quantity;
        await product.save();
      }
    }

    const newOrder = new ORDER({
      userId,
      items,
      total,
    });

    await newOrder.save();
    return res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  let userId;
  if (req.params.userId) {
    userId = req.params.userId;
  } else {
    userId = req.user?._id;
  }
  try {
    const orders = await ORDER.find({ userId }).populate("items.productId");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getOrders = async (req, res) => {
  try {
    const orders = await ORDER.find().populate("items.productId");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
