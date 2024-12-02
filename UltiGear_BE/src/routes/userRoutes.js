const express = require('express');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.post('/auth/register', userController.register);
userRoutes.post('/auth/login', userController.login);

module.exports = userRoutes;