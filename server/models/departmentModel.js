import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  courseTitle: { type: String, required: true }
});

const facultySchema = new mongoose.Schema({
  facultyName: { type: String, required: true },
  facultyEmail: { type: String, required: true }
});

const departmentSchema = new mongoose.Schema({
  departmentName: { type: String, required: true },
  hodName: { type: String, required: true },
  hodMessage: { type: String, required: true },
  description: { type: String, required: true },
  departmentImage: { type: String, required: true },
  startingDateAdmission: { type: Date, required: true },
  endingDateAdmission: { type: Date, required: true },
  coursesOffered: [courseSchema],
  facultyMembers: [facultySchema],
  // ... other fields you may want to include
},{timestamps:true});

const Department = mongoose.model('Department', departmentSchema);

export default Department;
