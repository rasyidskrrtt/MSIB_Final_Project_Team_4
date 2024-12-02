const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {
      type: String,
      required: true,
    },
    stock_qty: {
      type: Number,
      required: true,
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    description: {
      type: String,
    },
    image_url: {
      type: String,
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

module.exports = mongoose.model("Product", productSchema);
