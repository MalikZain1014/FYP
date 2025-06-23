// additionalInfoModel.js
import mongoose from "mongoose";

const additionalInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bloodGroup: { type: String },
  howKnowIBU: { type: String },
  disability: { type: String },
  religion: { type: String },
  hafizQuran: { type: Boolean },
  haveITSkills: { type: Boolean },
  hostelFacility: { type: Boolean },
  nextOfKin: { type: String },
  relationshipWithKin: { type: String },
  nextOfKinMobileNumber: { type: String },
  nextOfKinEmailAddress: { type: String },
  reservedQuota: { type: String },
},{timestamps:true});

const AdditionalInfo = mongoose.model("AdditionalInfo", additionalInfoSchema);

export default AdditionalInfo;
