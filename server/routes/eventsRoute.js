import express from "express";
import { adminAccess } from "../middlewares/auth.js";
import Event from "../models/eventModel.js";

const router = express.Router();

// Create a new event (admin access required)
router.post("/", adminAccess, async (req, res) => {
  try {
    const {
      title,
      date,
      time,
      image,
      description,
      website,
      organizer,
      phone,
      email,
      venue,
    } = req.body;

    const newEvent = new Event({
      title,
      date,
      time,
      image,
      description,
      website,
      organizer,
      phone,
      email,
      venue,
    });

    await newEvent.save();

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Update event by ID (admin access required)
router.put("/:id", adminAccess, async (req, res) => {
  // Similar to create route, update the fields as needed
  try {
    const eventId = req.params.eventId;
    const updatedEvenntData = req.body;
    await Event.findByIdAndUpdate(eventId, updatedEvenntData, { new: true });
    res.json({ message: "Event updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Delete event by ID (admin access required)
router.delete("/:id", adminAccess, async (req, res) => {
  // Similar to get route, find the event by ID and delete
  try {
    const eventId = req.params.eventId;
    await Event.findByIdAndDelete(eventId);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

export default router;
