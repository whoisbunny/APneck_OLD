const PRODUCT = require("../models/product");

// Controller to create a new product
exports.createProduct = async (req, res) => {
  try {
    req.body.image =
      req.protocol + "://" + req.get("host") + "/products/" + req.file.filename;

    const product = await PRODUCT.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await PRODUCT.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await PRODUCT.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to update product by ID
exports.updateProductById = async (req, res) => {
  try {
    req.body.image =
      req.protocol + "://" + req.get("host") + "/products/" + req.file.filename;
    const product = await PRODUCT.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to delete product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const product = await PRODUCT.findByIdAndDelete(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
