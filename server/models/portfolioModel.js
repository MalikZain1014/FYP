import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true }
},{timestamps:true});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
