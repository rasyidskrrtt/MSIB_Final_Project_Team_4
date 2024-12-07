const express = require('express');
const auth = require('../middleware/auth');
const authorization = require('../middleware/authorization');
const upload = require('../utils/multer');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.post('/auth/register', upload.single('photo'), userController.register);
userRoutes.post('/auth/login', userController.login);
userRoutes.put('/auth/editProfile/:id', auth, authorization(['CUSTOMER']), upload.single('photo'), userController.editProfile);

module.exports = userRoutes;