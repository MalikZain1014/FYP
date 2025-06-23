import mongoose from 'mongoose';
import Comment from './commentModel.js';

const blogSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  comments: [Comment.schema]  // Include Comment schema as subdocument
},{timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
