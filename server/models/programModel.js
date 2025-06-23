// programSelectionModel.js

import mongoose from "mongoose";

const programSelectionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    selectedPrograms: [{ type: String, required: true }], // List of selected programs
  },
  { timestamps: true }
);

const ProgramSelection = mongoose.model(
  "ProgramSelection",
  programSelectionSchema
);

export default ProgramSelection;
