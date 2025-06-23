import express from "express";
import AcademicCourse from "../models/CourseModel.js";
import { adminAccess } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", adminAccess, async (req, res) => {
  try {
    const newCourse = new AcademicCourse(req.body);
    await newCourse.save();
    res.status(201).json({ message: "Course created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const courses = await AcademicCourse.find();
    res.json(courses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
router.get("/:courseId", async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await AcademicCourse.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
router.put("/:courseId", adminAccess, async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const updatedCourseData = req.body;
    await AcademicCourse.findByIdAndUpdate(courseId, updatedCourseData, {
      new: true,
    });
    res.json({ message: "Course updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
router.delete("/:courseId", adminAccess, async (req, res) => {
  try {
    const courseId = req.params.courseId;
    await AcademicCourse.findByIdAndDelete(courseId);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
