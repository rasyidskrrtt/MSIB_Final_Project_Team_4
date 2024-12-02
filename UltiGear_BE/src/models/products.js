const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
    },
    image_url: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = productsSchema;
