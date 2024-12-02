const express = require('express');
const orderRoutes = express.Router();  
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

orderRoutes.post('/orders', auth, authorization('CUSTOMER'), orderController.createOrder); 
orderRoutes.get('/orders', auth, authorization('CUSTOMER'), orderController.getAllOrders);  
orderRoutes.get('/orders/:id', auth, authorization('CUSTOMER'), orderController.getOrderById); 
orderRoutes.put('/orders/:id/payment-status', auth, authorization('CUSTOMER'), orderController.updateOrderPaymentStatus);  //masih eror
orderRoutes.delete('/orders/:id', auth, authorization('CUSTOMER'), orderController.deleteOrder);  

module.exports = orderRoutes;
