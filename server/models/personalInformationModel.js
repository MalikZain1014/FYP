// personalInfoModel.js
import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, required: true },
  fathersName: { type: String, required: true },
  cnic: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  domicileCity: { type: String, required: true },
  mailingAddress: {
    address: { type: String, required: true },
    cityTehsil: { type: String, required: true },
  },
  permanentAddress: { type: String, required: true },
  permanentCity: { type: String, required: true },
},{timestamps:true});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);

export default PersonalInfo;
