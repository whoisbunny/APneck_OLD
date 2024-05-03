const Blog = require("../models/blog");
const { removeImage } = require("../utils/removeFile");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    if (req.file) {
      req.body.blogImage =
        req.protocol + "://" + req.get("host") + "/blogs/" + req.file.filename;
    } else {
      throw new Error("please provide a file");
    }

    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      blogs,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Get a single blog by ID
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "Blog not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    let findBlog = await Blog.findById(req.params.id);

    if (req.file) {
      req.body.blogImage =
        req.protocol +
        "://" +
        req.get("host") +
        "/products/" +
        req.file.filename;

      const imagename = findBlog.blogImage.split("/blogs/")[1];
      await removeImage(imagename, "blogs");
    } else {
      req.body.blogImage = findProduct.blogImage;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "Blog not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    let deleteItem = await Blog.findById(req.params.id);

    const imagename = deleteItem.blogImage.split("/blogs/")[1];
    await removeImage(imagename, "blogs");

    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "Blog not found",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
