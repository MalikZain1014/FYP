// masterApplicationRoutes.js

import express from "express";
import MasterApplication from "../models/masterApplicationModel.js";
import { studentAccess } from "../middlewares/auth.js";
const router = express.Router();

// Get the master application for the logged-in student
router.get("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const masterApplication = await MasterApplication.findOne({ userId })
      .populate("personalInformation")
      .populate("guardiansInformation")
      .populate("additionalInformation")
      .populate("academicQualifications")
      .populate("programSelection");

    res.status(200).json(masterApplication);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Create or update the master application for the logged-in student
router.post("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      personalInformation,
      guardiansInformation,
      additionalInformation,
      academicQualifications,
      programSelection,
    } = req.body;

    const existingMasterApplication = await MasterApplication.findOne({
      userId,
    });

    if (existingMasterApplication) {
      existingMasterApplication.set({
        personalInformation,
        guardiansInformation,
        additionalInformation,
        academicQualifications,
        programSelection,
      });
      await existingMasterApplication.save();
      res.json({ message: "Master application updated successfully" });
    } else {
      const newMasterApplication = new MasterApplication({
        userId,
        personalInformation,
        guardiansInformation,
        additionalInformation,
        academicQualifications,
        programSelection,
      });
      await newMasterApplication.save();
      res
        .status(201)
        .json({ message: "Master application created successfully" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Update the master application for the logged-in student
router.put("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      personalInformation,
      guardiansInformation,
      additionalInformation,
      academicQualifications,
      programSelection,
    } = req.body;

    const masterApplication = await MasterApplication.findOne({ userId });

    if (!masterApplication) {
      return res.status(404).json({ message: "Master application not found" });
    }

    masterApplication.set({
      personalInformation,
      guardiansInformation,
      additionalInformation,
      academicQualifications,
      programSelection,
    });
    await masterApplication.save();
    res.json({ message: "Master application updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Delete the master application for the logged-in student
router.delete("/", studentAccess, async (req, res) => {
  try {
    const userId = req.user.userId;

    const masterApplication = await MasterApplication.findOneAndDelete({
      userId,
    });

    if (!masterApplication) {
      return res.status(404).json({ message: "Master application not found" });
    }

    res.json({ message: "Master application deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
