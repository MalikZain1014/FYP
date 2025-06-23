import mongoose from 'mongoose';

const academicCourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  campus: { type: String, required: true },
  level: { type: String, required: true },
  instructor: { type: String, required: true },
  semester: { type: String, required: true },
  credit: { type: Number, required: true },
  method: { type: String, required: true },
  description: { type: String, required: true },
  courseHeading: { type: String, required: true },
  booksStudy: { type: [String], required: true },
  time: { type: String, required: true },
  place: { type: String, required: true },
  room: { type: String, required: true },
  dateRange: { type: String, required: true },
  instructorDetails: { type: String, required: true },
  courseImage: { type: String, required: true },
  quote: { type: String, required: true },
  largeDescription: { type: String, required: true }
},{timestamps:true});


const AcademicCourse = mongoose.model('AcademicCourse', academicCourseSchema);

export default AcademicCourse;