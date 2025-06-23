// personalInfoRoutes.js

import express from "express";
import { studentAccess } from "../middlewares/auth.js";
import PersonalInfo from "../models/personalInformationModel.js";
const router = express.Router();

// Create personal information (student access required)
router.post("/", studentAccess, async (req, res) => {
  try {
    const {
      fullName,
      fathersName,
      cnic,
      gender,
      email,
      mobileNumber,
      dateOfBirth,
      domicileCity,
      mailingAddress,
      permanentAddress,
      permanentCity,
    } = req.body;
    const userId = req.user.userId;
    console.log(req.user)
    const personalInfo = new PersonalInfo({
      userId,
      fullName,
      fathersName,
      cnic,
      gender,
      email,
      mobileNumber,
      dateOfBirth,
      domicileCity,
      mailingAddress,
      permanentAddress,
      permanentCity,
    });

    await personalInfo.save();
    res
      .status(201)
      .json({ message: "Personal information created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
