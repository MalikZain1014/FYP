// additionalInfoRoutes.js
import express from "express";
import AdditionalInfo from "../models/additionalInformationModel.js";
import { studentAccess } from "../middlewares/auth.js";
const router = express.Router();

// Create additional information (student access required)
router.post("/", studentAccess, async (req, res) => {
  try {
    const {
      bloodGroup,
      howKnowIBU,
      disability,
      religion,
      hafizQuran,
      haveITSkills,
      hostelFacility,
      nextOfKin,
      relationshipWithKin,
      nextOfKinMobileNumber,
      nextOfKinEmailAddress,
      reservedQuota,
    } = req.body;

    const userId = req.user.userId; // Assuming you retrieve userId from token

    const additionalInfo = new AdditionalInfo({
      userId,
      bloodGroup,
      howKnowIBU,
      disability,
      religion,
      hafizQuran,
      haveITSkills,
      hostelFacility,
      nextOfKin,
      relationshipWithKin,
      nextOfKinMobileNumber,
      nextOfKinEmailAddress,
      reservedQuota,
    });

    await additionalInfo.save();
    res
      .status(201)
      .json({ message: "Additional Information created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
