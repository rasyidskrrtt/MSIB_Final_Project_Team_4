const express = require('express');
const productRoutes = express.Router(); 
const productControllers = require('../controllers/productControllers');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');

productRoutes.post('/products', auth, authorization('ADMIN'), productControllers.createProduct);
productRoutes.get('/products', auth, authorization('ADMIN'), productControllers.getAllProducts);
productRoutes.get('/products/:id', auth, authorization('ADMIN'), productControllers.getProductById);
productRoutes.put('/products/:id', auth, authorization('ADMIN'), productControllers.updateProduct);
productRoutes.delete('/products/:id', auth, authorization('ADMIN'), productControllers.deleteProduct);

module.exports = productRoutes;
