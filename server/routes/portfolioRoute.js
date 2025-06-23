import express from 'express';
import Portfolio from '../models/portfolioModel.js';
import { adminAccess } from '../middlewares/auth.js';

const router = express.Router();

// Create a new portfolio item (admin access required)
router.post('/', adminAccess, async (req, res) => {
  try {
    const { image, title, type } = req.body;

    const newPortfolioItem = new Portfolio({
      image,
      title,
      type
    });

    await newPortfolioItem.save();

    res.status(201).json({ message: 'Portfolio item created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});

// Update portfolio item by ID (admin access required)
router.put('/:id', adminAccess, async (req, res) => {
  try {
    const { image, title, type } = req.body;

    const updatedPortfolioItem = await Portfolio.findByIdAndUpdate(
      req.params.id,
      {
        image,
        title,
        type
      },
      { new: true }
    );

    if (!updatedPortfolioItem) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    res.json(updatedPortfolioItem);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});

// Delete portfolio item by ID (admin access required)
router.delete('/:id', adminAccess, async (req, res) => {
  try {
    const deletedPortfolioItem = await Portfolio.findByIdAndRemove(req.params.id);

    if (!deletedPortfolioItem) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    res.json({ message: 'Portfolio item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});

export default router;
