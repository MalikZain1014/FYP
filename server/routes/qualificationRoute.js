import express from "express";
import Qualification from "../models/qualificationModel.js";
import { studentAccess } from "../middlewares/auth.js";
const router = express.Router();

// Get all qualifications for the logged-in student
router.get("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const qualifications = await Qualification.find({ userId });
    res.status(200).json(qualifications);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Create a new qualification for the logged-in student
router.post("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const newQualification = new Qualification({
      userId,
      ...req.body,
    });
    await newQualification.save();
    res.status(201).json({ message: "Qualification created successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Update a qualification for the logged-in student
router.put("/:id", studentAccess, async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);

    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    // Check if the qualification belongs to the logged-in student
    if (qualification.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Update qualification fields
    qualification.set(req.body);
    await qualification.save();

    res.json({ message: "Qualification updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Delete a qualification for the logged-in student
router.delete("/:id", studentAccess, async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);

    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    // Check if the qualification belongs to the logged-in student
    if (qualification.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Access denied" });
    }

    await qualification.remove();
    res.json({ message: "Qualification deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

export default router;
