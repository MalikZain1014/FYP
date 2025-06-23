// programSelectionRoutes.js

import express from "express";
import ProgramSelection from "../models/programModel.js";
import { studentAccess } from "../middlewares/auth.js";
const router = express.Router();

// Get program selection for the logged-in student
router.get("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const programSelection = await ProgramSelection.findOne({ userId });
    res.status(200).json(programSelection);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Create or update program selection for the logged-in student
router.post("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { selectedPrograms } = req.body;

    const existingProgramSelection = await ProgramSelection.findOne({ userId });

    if (existingProgramSelection) {
      existingProgramSelection.set({ selectedPrograms });
      await existingProgramSelection.save();
      res.json({ message: "Program selection updated successfully" });
    } else {
      const newProgramSelection = new ProgramSelection({
        userId,
        selectedPrograms,
      });
      await newProgramSelection.save();
      res
        .status(201)
        .json({ message: "Program selection created successfully" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Update program selection for the logged-in student
router.put("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { selectedPrograms } = req.body;

    const programSelection = await ProgramSelection.findOne({ userId });

    if (!programSelection) {
      return res.status(404).json({ message: "Program selection not found" });
    }

    programSelection.set({ selectedPrograms });
    await programSelection.save();
    res.json({ message: "Program selection updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Delete program selection for the logged-in student
router.delete("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;

    const programSelection = await ProgramSelection.findOneAndDelete({
      userId,
    });

    if (!programSelection) {
      return res.status(404).json({ message: "Program selection not found" });
    }

    res.json({ message: "Program selection deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
