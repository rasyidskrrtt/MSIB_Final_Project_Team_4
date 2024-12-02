const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    total_price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    payment_status: {
      type: String,
      enum: ['PENDING', 'PAID'],
      required: true,
    },
    payment_date: {
      type: Date,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);