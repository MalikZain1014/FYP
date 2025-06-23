import express from "express";
import { teacherOrAdminAccess, studentAccess } from "../middlewares/auth.js";
import Comment from "../models/commentModel.js";

const router = express.Router();

router.post("/", teacherOrAdminAccess, async (req, res) => {
  try {
    const { userImage, username, email, date, website, time, comment, blog } =
      req.body;

    const newComment = new Comment({
      userImage,
      username,
      email,
      date,
      website,
      time,
      comment,
      blog,
    });

    await newComment.save();

    res.status(201).json({ message: "Comment created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
// Get Comments of that blog post
router.get("/blog/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const comments = await Comment.find({ blog: blogId });

    if (comments.length === 0) {
      return res.json({ message: "No comment are posted yet!" });
    }
    res.json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

router.put("/:commentId", teacherOrAdminAccess, async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { website, comment } = req.body;

    await Comment.findByIdAndUpdate(
      commentId,
      { website, comment },
      { new: true }
    );

    res.json({ message: "Comment updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

router.delete("/:commentId", teacherOrAdminAccess, async (req, res) => {
  try {
    const commentId = req.params.commentId;

    await Comment.findByIdAndDelete(commentId);

    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
export default router;
