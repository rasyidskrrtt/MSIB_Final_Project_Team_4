const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/users');
const ResponseAPI = require('../utils/response');
const { jwtSecret, jwtExpiresIn } = require('../config/env');

// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return ResponseAPI.unauthorized(res, 'Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return ResponseAPI.unauthorized(res, 'Invalid email or password');
    }

    const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, {
      expiresIn: jwtExpiresIn,
    });

    return ResponseAPI.success(res, {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        photo_url: user.photo_url || '',
      },
    }, 'Login successful');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const { user } = req;
    return ResponseAPI.success(res, {
      id: user._id,
      name: user.name,
      email: user.email,
      photo_url: user.photo_url || '',
    }, 'User profile retrieved successfully');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, email, password, photo_url } = req.body;
    const { user } = req;

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (photo_url) user.photo_url = photo_url;

    await user.save();

    return ResponseAPI.success(res, {
      id: user._id,
      name: user.name,
      email: user.email,
      photo_url: user.photo_url || '',
    }, 'Profile updated successfully');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};