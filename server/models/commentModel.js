import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  userImage: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  website: { type: String },
  time: { type: String, required: true },
  comment: { type: String, required: true },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true }
},{timestamps:true});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
