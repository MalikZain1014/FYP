import express from "express";
import ContactUs from "../models/ContactModel.js";
import { adminAccess } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;
    const newContactMessage = new ContactUs({
      fullName,
      email,
      subject,
      message,
    });
    await newContactMessage.save();
    res.status(201).json({ message: "Contact message created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

router.get("/", adminAccess, async (req, res) => {
  try {
    const contactMessages = await ContactUs.find();
    res.json(contactMessages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

router.get("/:messageId", adminAccess, async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const contactMessage = await ContactUs.findById(messageId);
    if (!contactMessage) {
      return res.status(404).json({ message: "Contact message not found" });
    }
    res.json(contactMessage);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
router.put("/:messageId", adminAccess, async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const updatedContactMessageData = req.body;
    await ContactUs.findByIdAndUpdate(messageId, updatedContactMessageData, {
      new: true,
    });
    res.json({ message: "Contact message updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
router.delete("/:messageId", adminAccess, async (req, res) => {
  try {
    const messageId = req.params.messageId;
    await ContactUs.findByIdAndDelete(messageId);
    res.json({ message: "Contact message deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
