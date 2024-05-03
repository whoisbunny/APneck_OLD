const CATEGORY = require("../models/category");

// Controller to create a new category
exports.createCategory = async (req, res) => {
  try {
    const category = await CATEGORY.create(req.body);
    res.status(201).json({
      category,
      message: "Category created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CATEGORY.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to get category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await CATEGORY.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to update category by ID
exports.updateCategoryById = async (req, res) => {
  try {
    const category = await CATEGORY.findByIdAndUpdate(
      req.params.categoryId,
      req.body,
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ category, message: "Category updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to delete category by ID
exports.deleteCategoryById = async (req, res) => {
  try {
    const category = await CATEGORY.findByIdAndDelete(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
