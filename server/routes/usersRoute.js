import express from "express";
import User from "../models/userModel.js";
import { adminAccess } from "../middlewares/auth.js";
const router = express.Router();

// Get all users (admin access required)
router.get("/", adminAccess, async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password field
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get a specific user by ID (admin access required)
router.get("/:id", adminAccess, async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password"); // Exclude password field

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
