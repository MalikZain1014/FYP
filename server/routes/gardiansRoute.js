// guardiansInfoRoutes.js

import express from "express";
import GuardiansInfo from "../models/gardiansModel.js";
import { studentAccess } from "../middlewares/auth.js";
const router = express.Router();

// Create guardians information (student access required)
router.post("/", studentAccess, async (req, res) => {
  try {
    const {
      nameofGuardian,
      status,
      relationshipWithGuardian,
      guardianMonthlyIncome,
      guardianOccupation,
      guardianCNIC,
      guardianMobileNumber,
      guardianEmailAddress,
      dependentFamilyMembers,
    } = req.body;

    const userId = req.user.userId; // Assuming you retrieve userId from token

    const guardiansInfo = new GuardiansInfo({
      userId,
      nameofGuardian,
      status,
      relationshipWithGuardian,
      guardianMonthlyIncome,
      guardianOccupation,
      guardianCNIC,
      guardianMobileNumber,
      guardianEmailAddress,
      dependentFamilyMembers,
    });

    await guardiansInfo.save();
    res
      .status(201)
      .json({ message: "Guardian's Information created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
