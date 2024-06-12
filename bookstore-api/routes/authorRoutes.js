const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const auth = require('../utils/auth');

router.get('/', authorController.getAuthors);
router.get('/:id', authorController.getAuthor);
router.post('/', auth.verifyToken, auth.verifyAdmin, authorController.createAuthor);
router.put('/:id', auth.verifyToken, auth.verifyAdmin, authorController.updateAuthor);
router.delete('/:id', auth.verifyToken, auth.verifyAdmin, authorController.deleteAuthor);

module.exports = router;
