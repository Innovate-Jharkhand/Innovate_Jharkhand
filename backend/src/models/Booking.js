const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    interest: {
      type: String,
      required: true,
      enum: [
        'Weekend waterfall trail',
        'Plateau and forest retreat',
        'Culture, craft and pilgrimage loop',
        'Custom mixed itinerary',
      ],
    },
    message: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    paymentId: {
      type: String,
      default: null,
    },
    signature: {
      type: String,
      default: null,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'awaiting_counter_payment'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
