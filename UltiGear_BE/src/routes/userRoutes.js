const express = require('express');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.post('/auth/register', userController.register);
userRoutes.post('/auth/login', userController.login);
userRoutes.put('/auth/editProfile/:id', auth, authorization('CUSTOMER'), userController.editProfile);

module.exports = userRoutes;