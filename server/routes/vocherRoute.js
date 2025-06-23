import express from "express";
import Voucher from "../models/voucherModel.js";
import { studentAccess, adminAccess } from "../middlewares/auth.js";
import calculateFee from "../utils/calculatedFee.js";
import PDFDocument from "pdfkit";

// Rest of your code using PDFDocument...

const router = express.Router();

// Similar to the generate fee voucher route, but generate an application form instead
router.get("/generate-fee-voucher/:userId", studentAccess, async (req, res) => {
  try {
    const userId = req.params.userId;
    // Calculate the fee amount using the calculateFee function
    const feeAmount = await calculateFee(userId);

    // Generate a PDF fee voucher using PDFKit
    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename="FeeVoucher.pdf"`);

    doc.pipe(res); // Pipe the PDF to the response

    doc.fontSize(16).text("Fee Voucher", { align: "center" });
    doc.fontSize(14).text(`User ID: ${userId}`);
    doc.fontSize(14).text(`Total Fee: ${feeAmount}`);

    doc.end();
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});
// Get all vouchers (admin access required)
router.get("/", adminAccess, async (req, res) => {
  try {
    const vouchers = await Voucher.find();
    if (vouchers.length === 0) {
      res.status(200).json({ message: "No Vocherrr created Yet!!" });
    }
    res.status(200).json(vouchers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get a specific voucher by ID (admin access required)
router.get("/:id", adminAccess, async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id);

    if (!voucher) {
      return res.status(404).json({ message: "Voucher not found" });
    }

    res.json(voucher);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Create a new voucher (admin access required)
router.post("/", studentAccess, async (req, res) => {
  try {
    const { userId, enrollmentField, enrollmentFee, universityName } = req.body;

    const newVoucher = new Voucher({
      userId,
      enrollmentField,
      enrollmentFee,
      universityName,
    });

    await newVoucher.save();
    res.status(201).json({ message: "Voucher created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Update a voucher (admin access required)
router.put("/:id", adminAccess, async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id);

    if (!voucher) {
      return res.status(404).json({ message: "Voucher not found" });
    }

    voucher.enrollmentField =
      req.body.enrollmentField || voucher.enrollmentField;
    voucher.enrollmentFee = req.body.enrollmentFee || voucher.enrollmentFee;

    await voucher.save();
    res.json({ message: "Voucher updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Delete a voucher (admin access required)
router.delete("/:id", adminAccess, async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id);

    if (!voucher) {
      return res.status(404).json({ message: "Voucher not found" });
    }

    await voucher.remove();
    res.json({ message: "Voucher deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// ...

// router.get("/vochercount", adminAccess, async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1]; // Get the token from headers

//     if (!token) {
//       return res.status(401).json({ message: "Access denied" });
//     }

//     const decoded = jwt.verify(token, "usama-usama-usama"); // Decode the token
//     const userId = decoded._userId; // Get the user's ID from the decoded token
//     const enrollmentField = "Course Name"; // Replace with the actual enrollment field

//     const results = await Voucher.aggregate([
//       {
//         $match: {
//           userId: mongoose.Types.ObjectId(userId),
//           enrollmentField,
//         },
//       },
//       {
//         $group: {
//           _id: "$enrollmentField",
//           count: { $sum: 1 },
//         },
//       },
//     ]).exec();

//     // Handle the results
//     res
//       .status(200)
//       .json({ title: "User enrollment activities:", results: results }); // You can also send the results as a response
//   } catch (error) {
//     console.error("Error retrieving enrollment activities:", error);
//     // Handle error
//     res
//       .status(500)
//       .json({ message: "An error occurred", error: error.message });
//   }
// });

export default router;
