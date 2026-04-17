const express = require('express');
const { createBooking, verifyPayment, getBooking, saveBookingFile } = require('../controllers/bookingController');

const router = express.Router();

router.post('/create', createBooking);
router.post('/verify', verifyPayment);
router.post('/save-file', saveBookingFile);
router.get('/:id', getBooking);

module.exports = router;
