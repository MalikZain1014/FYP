// masterApplicationModel.js

import mongoose from "mongoose";

const masterApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  personalInformation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalInfo",
  },
  guardiansInformation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GuardiansInfo",
  },
  additionalInformation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AdditionalInfo",
  },
  academicQualifications: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Qualification" },
  ],
  programSelection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProgramSelection",
  },
  // Add other sections as needed
});

const MasterApplication = mongoose.model(
  "MasterApplication",
  masterApplicationSchema
);

export default MasterApplication;
