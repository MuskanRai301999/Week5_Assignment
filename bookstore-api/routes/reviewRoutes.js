const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const auth = require('../utils/auth');

router.get('/books/:bookId/reviews', reviewController.getReviews);
router.post('/books/:bookId/reviews', auth.verifyToken, reviewController.addReview);
router.delete('/reviews/:id', auth.verifyToken, reviewController.deleteReview);

module.exports = router;
