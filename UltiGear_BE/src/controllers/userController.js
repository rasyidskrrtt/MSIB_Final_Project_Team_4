const jwt = require('jsonwebtoken');
const models = require('../models'); 
const ResponseAPI = require('../utils/response');
const { jwtSecret, jwtExpiresIn } = require('../config/env');

const generateToken = (id) => jwt.sign({ id }, jwtSecret, { expiresIn: jwtExpiresIn });

const userController = {
  async register(req, res) {
    try {
      const { username, email, password, confirmPassword, photo_url } = req.body;

      // Validasi email dan password
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return ResponseAPI.error(res, 'Invalid email format', 400);
      }
      if (password.length < 8) {
        return ResponseAPI.error(res, 'Password must be at least 8 characters long', 400);
      }
      if (password !== confirmPassword) {
        return ResponseAPI.error(res, 'Passwords do not match', 400);
      }

      // Cek email sudah terdaftar
      const existingUser = await models.User.findOne({ email }); //ini
      if (existingUser) {
        return ResponseAPI.error(res, 'Email already exists', 409);
      }

      // Membuat user baru (hashing dilakukan di middleware)
      const user = new models.User({ username, email, password });
      await user.save();

      ResponseAPI.success(res, {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          photo_url: user.photo_url,
        },
      }, 'Registration successful', 201);
    } catch (error) {
      ResponseAPI.serverError(res, error.message || 'Internal Server Error');
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Cari user berdasarkan email
      const user = await models.User.findOne({ email });
      if (!user) {
        return ResponseAPI.error(res, 'Invalid email or password', 401);
      }

      // Periksa password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return ResponseAPI.error(res, 'Invalid email or password', 401);
      }

      // Generate token JWT
      const token = generateToken(user._id);

      ResponseAPI.success(res, {
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          photo_url: user.photo_url,
        },
      }, 'Login successful');
    } catch (error) {
      ResponseAPI.serverError(res, error.message || 'Internal Server Error');
    }
  },
};

module.exports = userController;
