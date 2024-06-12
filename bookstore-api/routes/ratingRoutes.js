const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const auth = require('../utils/auth');

router.get('/books/:bookId/ratings', ratingController.getRatings);
router.post('/books/:bookId/ratings', auth.verifyToken, ratingController.addRating);

module.exports = router;
