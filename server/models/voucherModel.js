import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    universityName: { type: String, default: "University of EduConnect" },
    enrollmentField: { type: String, required: true },
    enrollmentDate: { type: Date, default: Date.now },
    enrollmentFee: { type: Number, default: 300 },
  },
  { timestamps: true }
);

const Voucher = mongoose.model("Voucher", voucherSchema);

export default Voucher;
