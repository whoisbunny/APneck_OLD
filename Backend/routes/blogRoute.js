// routes/blogRoutes.js

const express = require("express");
const blogController = require("../controllers/blogController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/blogs");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });


const router = express.Router();

// Define routes
router.post("/", upload.single("blogImage"), blogController.createBlog);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlog);
router.put("/:id", upload.single("blogImage"), blogController.updateBlog); // Use patch for partial updates
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
