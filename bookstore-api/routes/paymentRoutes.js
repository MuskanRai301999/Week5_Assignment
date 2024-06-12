const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../utils/auth');

router.post('/orders', auth.verifyToken, paymentController.createOrder);
router.get('/orders/:id', auth.verifyToken, paymentController.getOrder);

module.exports = router;
