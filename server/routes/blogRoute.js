import express from "express";
import { teacherOrAdminAccess } from "../middlewares/auth.js";
import Blog from "../models/blogModel.js";

const router = express.Router();

// Create a new blog post
router.post("/", teacherOrAdminAccess, async (req, res) => {
  try {
    const { date, title, author, type, image } = req.body; // Destructure the fields
    const newBlog = new Blog({ date, title, author, type, image }); // Provide the fields to create a new blog
    await newBlog.save();
    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Update a blog post
router.put("/:id", teacherOrAdminAccess, async (req, res) => {
  try {
    const blogId = req.params.id;
    const { date, title, author, type, image } = req.body;
    await Blog.findByIdAndUpdate(
      blogId,
      { date, title, author, type, image },
      { new: true }
    );
    res.json({ message: "Blog post updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Delete a blog post
router.delete("/:id", teacherOrAdminAccess, async (req, res) => {
  try {
    const blogId = req.params.id;
    await Blog.findByIdAndDelete(blogId);
    res.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length === 0) {
      return res.json({ message: "No blogs have been created yet" });
    }

    res.json(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
