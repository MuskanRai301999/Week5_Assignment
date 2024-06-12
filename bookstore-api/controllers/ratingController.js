const Rating = require('../models/Rating');

exports.getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find({ bookId: req.params.bookId });
    res.status(200).json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addRating = async (req, res) => {
  try {
    const existingRating = await Rating.findOne({
      userId: req.user.id,
      bookId: req.params.bookId
    });
    if (existingRating) {
      return res.status(400).json({ message: 'User has already rated this book' });
    }
    const rating = new Rating({
      userId: req.user.id,
      bookId: req.params.bookId,
      rating: req.body.rating
    });
    await rating.save();
    res.status(201).json(rating);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
