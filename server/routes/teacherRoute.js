import express from "express";
import Faculty from "../models/teacherModel.js";
import { adminAccess } from "../middlewares/auth.js";

const router = express.Router();

// Create a new faculty member (admin access required)
router.post("/", adminAccess, async (req, res) => {
  try {
    const {
      teacherImage,
      teacherName,
      teacherEmail,
      teacherEducation,
      teacherQuote,
      teacherFacebook,
      teacherLinkedIn,
      teacherSkype,
      teacherTwitter,
      teacherPhone,
      teacherSkills,
      teacherPublications,
      teacherDescription,
    } = req.body;

    const newFacultyMember = new Faculty({
      teacherImage,
      teacherName,
      teacherEmail,
      teacherEducation,
      teacherQuote,
      teacherFacebook,
      teacherLinkedIn,
      teacherSkype,
      teacherTwitter,
      teacherPhone,
      teacherSkills,
      teacherPublications,
      teacherDescription,
    });

    await newFacultyMember.save();

    res.status(201).json({ message: "Faculty member created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Update faculty member by ID (admin access required)
router.put("/:id", adminAccess, async (req, res) => {
  // Similar logic as above, but update faculty member by ID
  try {
    const teacherId = req.params.teacherId;
    const updatedTecher = req.body;
    await Faculty.findByIdAndUpdate(teacherId, updatedTecher, {
      new: true,
    });
    res.json({ message: "Teacher updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Delete faculty member by ID (admin access required)
router.delete("/:id", adminAccess, async (req, res) => {
  // Similar logic as above, but delete faculty member by ID
  try {
    const teacherId = req.params.teacherId;
    await Faculty.findByIdAndDelete(teacherId);
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get all faculty members
router.get("/", async (req, res) => {
  // Logic to get all faculty members
  try {
    const AllTeachers = await Faculty.find();
    res.json(AllTeachers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get a specific faculty member by ID
router.get("/:id", async (req, res) => {
  // Logic to get a specific faculty member by ID
  try {
    const teacherId = req.params.teacherId;
    const teacher = await Faculty.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json(teacher);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
