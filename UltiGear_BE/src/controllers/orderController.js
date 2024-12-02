const Order = require('../models/orders');
const User = require('../models/users');
const Product = require('../models/product');
const ResponseAPI = require('../utils/response');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { product_id, user_id, total_price, payment_status, payment_date } = req.body;

    // Validate if the user exists
    const user = await User.findById(user_id);
    if (!user) {
      return ResponseAPI.notFound(res, 'User not found');
    }

    // Validate if the product exists
    const product = await Product.findById(product_id);
    if (!product) {
      return ResponseAPI.notFound(res, 'Product not found');
    }

    const newOrder = new Order({
      product_id,
      user_id,
      total_price,
      payment_status,
      payment_date,
    });

    await newOrder.save();
    return ResponseAPI.success(res, { order: newOrder }, 'Order created successfully', 201);
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user_id')
      .populate('product_id');
    return ResponseAPI.success(res, { orders });
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user_id')
      .populate('product_id');
    if (!order) {
      return ResponseAPI.notFound(res, 'Order not found');
    }
    return ResponseAPI.success(res, { order });
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Update the payment status of an order
exports.updateOrderPaymentStatus = async (req, res) => {
  try {
    const { payment_status, payment_date } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { payment_status, payment_date, updated_at: Date.now() },
      { new: true }
    );
    if (!order) {
      return ResponseAPI.notFound(res, 'Order not found');
    }
    return ResponseAPI.success(res, { order }, 'Payment status updated');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return ResponseAPI.notFound(res, 'Order not found');
    }
    return ResponseAPI.success(res, null, 'Order deleted');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};