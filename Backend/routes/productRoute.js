const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/products");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });
// Route to create a new product
router.post(
  "/",
  upload.single("image"),
  authMiddleware,
  isAdmin,
  productController.createProduct
);

// Route to get all products
router.get("/", productController.getAllProducts);

// Route to get product by ID
router.get("/:productId", productController.getProductById);

// Route to update product by ID
router.put(
  "/:productId",
  upload.single("image"),
  authMiddleware,
  isAdmin,
  productController.updateProductById
);

// Route to delete product by ID
router.delete(
  "/:productId",
  authMiddleware,
  isAdmin,
  productController.deleteProductById
);

module.exports = router;
