const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const auth = require('../utils/auth');

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post('/', auth.verifyToken, auth.verifyAdmin, bookController.createBook);
router.put('/:id', auth.verifyToken, auth.verifyAdmin, bookController.updateBook);
router.delete('/:id', auth.verifyToken, auth.verifyAdmin, bookController.deleteBook);

module.exports = router;
