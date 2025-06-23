import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  skillName: { type: String, required: true },
  percentage: { type: Number, required: true }
});

const facultySchema = new mongoose.Schema({
  teacherImage: { type: String, required: true },
  teacherName: { type: String, required: true },
  teacherEmail: { type: String, required: true },
  teacherEducation: [String],
  teacherQuote: { type: String },
  teacherFacebook: { type: String },
  teacherLinkedIn: { type: String },
  teacherSkype: { type: String },
  teacherTwitter: { type: String },
  teacherPhone: { type: String },
  teacherSkills: [skillSchema],
  teacherPublications: [String],
  teacherDescription: {
    paragraph1: { type: String, required: true },
    paragraph2: { type: String, required: true }
  }
},{timestamps:true});

const Faculty = mongoose.model('Faculty', facultySchema);

export default Faculty;
