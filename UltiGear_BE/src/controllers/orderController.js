const models = require('../models');
const ResponseAPI = require('../utils/response');

const orderControllers = {
  // Create a new order
  createOrder: async (req, res) => {
    try {
      const { product_id, user_id, total_price, payment_status, payment_date } = req.body;

      // Validate if the user exists
      const user = await models.User.findById(user_id);
      if (!user) {
        return ResponseAPI.notFound(res, 'User not found');
      }

      // Validate if the product exists
      const product = await models.Product.findById(product_id);
      if (!product) {
        return ResponseAPI.notFound(res, 'Product not found');
      }

      const newOrder = await models.Order.create({
        product_id,
        user_id,
        total_price,
        payment_status,
        payment_date,
      });

      return ResponseAPI.success(res, { order: newOrder }, 'Order created successfully', 201);
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Get all orders
  getAllOrders: async (req, res) => {
    try {
      const orders = await models.Order.find()
        .populate('user_id') 
        .populate('product_id'); 
      return ResponseAPI.success(res, { orders }, 'Orders retrieved successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Get an order by ID
  getOrderById: async (req, res) => {
    try {
      const order = await models.Order.findById(req.params.id)
        .populate('user_id')
        .populate('product_id');
      if (!order) {
        return ResponseAPI.notFound(res, 'Order not found');
      }
      return ResponseAPI.success(res, { order }, 'Order retrieved successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Update the payment status of an order
  updateOrderPaymentStatus: async (req, res) => { //masih eror
    try {
      const { payment_status, payment_date } = req.body;
      const order = await models.Order.findByIdAndUpdate(
        req.params.id,
        { payment_status, payment_date, updated_at: Date.now() },
        { new: true }
      );
      if (!order) {
        return ResponseAPI.notFound(res, 'Order not found');
      }
      return ResponseAPI.success(res, { order }, 'Payment status updated successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Delete an order
  deleteOrder: async (req, res) => {
    try {
      const order = await models.Order.findByIdAndDelete(req.params.id);
      if (!order) {
        return ResponseAPI.notFound(res, 'Order not found');
      }
      return ResponseAPI.success(res, null, 'Order deleted successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },
};

module.exports = orderControllers;
