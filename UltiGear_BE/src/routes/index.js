const express = require('express');
const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');
const orderRouter = require('./orderRoutes'); 
const routes = express.Router();

routes.use(userRouter);
routes.use(productRouter);
routes.use(orderRouter); 

module.exports = routes;
