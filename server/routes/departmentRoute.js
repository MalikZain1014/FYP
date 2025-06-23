import express from "express";
import { adminAccess } from "../middlewares/auth.js";
import Department from "../models/departmentModel.js";

const router = express.Router();

// Create a new department (admin access required)
router.post("/", adminAccess, async (req, res) => {
  try {
    const {
      departmentName,
      hodName,
      hodMessage,
      description,
      departmentImage,
      startingDateAdmission,
      endingDateAdmission,
      coursesOffered,
      facultyMembers,
    } = req.body;

    const newDepartment = new Department({
      departmentName,
      hodName,
      hodMessage,
      description,
      departmentImage,
      startingDateAdmission,
      endingDateAdmission,
      coursesOffered,
      facultyMembers,
    });

    await newDepartment.save();

    res.status(201).json({ message: "Department created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get department by ID
router.get("/:id", async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.json(department);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Update department by ID (admin access required)
router.put("/:id", adminAccess, async (req, res) => {
  // Similar to create route, update the fields as needed
  try {
    const departmentId = req.params.id;
    const updatedDepartmentData = req.body;
    await Department.findByIdAndUpdate(departmentId, updatedDepartmentData, {
      new: true,
    });
    res.json({ mesage: "Department updated successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Delete department by ID (admin access required)
router.delete("/:id", adminAccess, async (req, res) => {
  try {
    const departmentId = req.params.id;
    await Department.findByIdAndDelete(departmentId);
    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error accoured", error: error.message });
  }
});

export default router;
