const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");

// Route to create a new category
router.post("/", authMiddleware, isAdmin, categoryController.createCategory);

// Route to get all categories
router.get("/", categoryController.getAllCategories);

// Route to get category by ID
router.get("/:categoryId", categoryController.getCategoryById);

// Route to update category by ID
router.put(
  "/:categoryId",
  authMiddleware,
  isAdmin,
  categoryController.updateCategoryById
);

// Route to delete category by ID
router.delete(
  "/:categoryId",
  authMiddleware,
  isAdmin,
  categoryController.deleteCategoryById
);

module.exports = router;
