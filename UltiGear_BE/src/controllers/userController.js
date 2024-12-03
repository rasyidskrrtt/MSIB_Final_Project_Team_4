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

  async editProfile(req, res) {
    try {
      const userIdFromToken = req.user._id; // ID pengguna dari token JWT
      const userIdFromParams = req.params.id; // ID pengguna dari URL parameter

      // Pastikan pengguna hanya dapat mengedit profil mereka sendiri
      if (userIdFromToken.toString() !== userIdFromParams) {
        return ResponseAPI.forbidden(res, 'You are not authorized to edit this profile');
      }

      const { username, email, photo_url } = req.body;

      // Validasi email jika diubah
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return ResponseAPI.error(res, 'Invalid email format', 400);
      }

      // Periksa apakah email sudah digunakan oleh pengguna lain
      if (email) {
        const existingUser = await models.User.findOne({ email });
        if (existingUser && existingUser._id.toString() !== userIdFromToken) {
          return ResponseAPI.error(res, 'Email is already in use', 409);
        }
      }

      // Ambil data pengguna berdasarkan ID dari URL parameter
      const user = await models.User.findById(userIdFromParams);
      if (!user) {
        return ResponseAPI.error(res, 'User not found', 404);
      }

      // Perbarui data pengguna jika ada perubahan
      if (username) user.username = username;
      if (email) user.email = email;
      if (photo_url) user.photo_url = photo_url;

      // Simpan perubahan ke database
      await user.save();

      // Kembalikan data pengguna yang telah diperbarui
      ResponseAPI.success(res, {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          photo_url: user.photo_url,
        },
      }, 'Profile updated successfully');
    } catch (error) {
      ResponseAPI.serverError(res, error.message || 'Internal Server Error');
    }
  },
};

module.exports = userController;
