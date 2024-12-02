const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

// Create a new order
router.post('/', authMiddleware, orderController.createOrder);

// Get all orders
router.get('/', authMiddleware, orderController.getAllOrders);

// Get an order by ID
router.get('/:id', authMiddleware, orderController.getOrderById);

// Update the payment status of an order
router.put('/:id/payment-status', authMiddleware, orderController.updateOrderPaymentStatus);

// Delete an order
router.delete('/:id', authMiddleware, orderController.deleteOrder);

module.exports = router;