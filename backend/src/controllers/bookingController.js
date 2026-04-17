const Razorpay = require('razorpay');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const Booking = require('../models/Booking');

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_ID',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'YOUR_SECRET',
});

// Create bookings directory if it doesn't exist
const bookingsDir = path.join(__dirname, '../../bookings');
if (!fs.existsSync(bookingsDir)) {
  fs.mkdirSync(bookingsDir, { recursive: true });
}

// Generate unique booking ID
const generateBookingId = () => {
  return 'BK' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
};

// Save booking to file organized by date
const saveBookingToFile = async (bookingData) => {
  try {
    const today = new Date();
    const dateFolder = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    const dateFolderPath = path.join(bookingsDir, dateFolder);

    // Create date folder if it doesn't exist
    if (!fs.existsSync(dateFolderPath)) {
      fs.mkdirSync(dateFolderPath, { recursive: true });
    }

    // Create booking file
    const bookingId = generateBookingId();
    const fileName = `${bookingId}.json`;
    const filePath = path.join(dateFolderPath, fileName);

    const bookingContent = {
      bookingId,
      timestamp: new Date().toISOString(),
      date: dateFolder,
      ...bookingData,
    };

    // Write to file
    fs.writeFileSync(filePath, JSON.stringify(bookingContent, null, 2));

    // Also save to a daily summary CSV
    const csvPath = path.join(dateFolderPath, 'bookings_summary.csv');
    const csvHeader = 'Booking ID,Date,Time,Name,Email,Phone,Interest,Payment Method,Amount\n';

    const time = today.toLocaleTimeString('en-IN');
    const csvLine = `${bookingId},${dateFolder},${time},"${bookingData.name}","${bookingData.email}","${bookingData.phone}","${bookingData.interest}","${bookingData.paymentMethod}",${bookingData.amount}\n`;

    if (!fs.existsSync(csvPath)) {
      fs.writeFileSync(csvPath, csvHeader + csvLine);
    } else {
      fs.appendFileSync(csvPath, csvLine);
    }

    return { bookingId, filePath };
  } catch (error) {
    console.error('Error saving booking to file:', error);
    throw error;
  }
};

// @desc    Create booking order
// @route   POST /api/bookings/create
// @access  Public
const createBooking = async (req, res) => {
  try {
    const { name, email, phone, interest, message, amount } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !interest || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create Razorpay order
    const options = {
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        name,
        email,
        phone,
        interest,
      },
    };

    const order = await razorpay.orders.create(options);

    // Save booking to database
    const booking = await Booking.create({
      name,
      email,
      phone,
      interest,
      message,
      amount,
      orderId: order.id,
      paymentStatus: 'pending',
    });

    return res.status(201).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      bookingId: booking._id,
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Verify payment
// @route   POST /api/bookings/verify
// @access  Public
const verifyPayment = async (req, res) => {
  try {
    const { orderId, paymentId, signature, email } = req.body;

    // Verify signature
    const body = orderId + '|' + paymentId;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'YOUR_SECRET')
      .update(body.toString())
      .digest('hex');

    if (expectedSignature === signature) {
      // Update booking payment status
      await Booking.findOneAndUpdate(
        { orderId },
        {
          paymentStatus: 'completed',
          paymentId,
          signature,
        }
      );

      return res.json({ success: true, message: 'Payment verified successfully' });
    } else {
      return res.status(400).json({ success: false, message: 'Invalid signature' });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Get booking details
// @route   GET /api/bookings/:id
// @access  Public
const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      return res.json(booking);
    } else {
      return res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Save booking to file (Pay on Counter)
// @route   POST /api/bookings/save-file
// @access  Public
const saveBookingFile = async (req, res) => {
  try {
    const { name, email, phone, interest, message, paymentMethod, amount } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !interest || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save to file
    const { bookingId, filePath } = await saveBookingToFile({
      name,
      email,
      phone,
      interest,
      message,
      paymentMethod,
      amount,
      status: 'confirmed',
    });

    // Also save to database
    await Booking.create({
      name,
      email,
      phone,
      interest,
      message,
      amount,
      orderId: bookingId,
      paymentStatus: 'awaiting_counter_payment',
    });

    return res.status(201).json({
      success: true,
      bookingId,
      message: 'Booking confirmed! Please pay at counter.',
      filePath,
    });
  } catch (error) {
    console.error('File booking error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBooking,
  verifyPayment,
  getBooking,
  saveBookingFile,
};
