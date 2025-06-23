// qualificationModel.js

import mongoose from "mongoose";

const categoryFields = {
  matriculation: {
    boardUniversity: { type: String, required: true },
    rollNumber: { type: Number },
    registrationNumber: { type: Number },
  },
  intermediate: {
    subjectOne: {
      subjectName: { type: String, required: true },
      totalMarks: { type: Number, required: true },
      obtainedMarks: { type: Number, required: true },
    },
    subjectTwo: {
      subjectName: { type: String, required: true },
      totalMarks: { type: Number, required: true },
      obtainedMarks: { type: Number, required: true },
    },
    subjectThree: {
      subjectName: { type: String, required: true },
      totalMarks: { type: Number, required: true },
      obtainedMarks: { type: Number, required: true },
    },
  },
  // Add more category fields as needed
};

const qualificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  certificateCategory: { type: String, required: true },
  certificateDegree: { type: String, required: true },
  resultType: { type: String },
  passingYear: { type: Number },
  totalMarks: { type: Number },
  obtainedMarks: { type: Number },
  categorySpecificFields: mongoose.Schema.Types.Mixed, // Flexible nested object
});

qualificationSchema.pre("save", function (next) {
  const category = this.certificateCategory;
  if (categoryFields[category]) {
    this.categorySpecificFields = categoryFields[category];
  }
  next();
});

const Qualification = mongoose.model("Qualification", qualificationSchema);

export default Qualification;
