const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags: [Users]
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Success
 *               data:
 *                 token: "jwt_token_here"
 *                 user:
 *                   id: "user_id"
 *                   name: "John Doe"
 *                   email: "john@example.com"
 *                   role: "CUSTOMER"
 *                   photo_url: "https://example.com/photo.jpg"
 */
router.post('/login', userController.login);

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     tags: [Users]
 *     summary: Get user profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Success
 *               data:
 *                 id: "user_id"
 *                 name: "John Doe"
 *                 email: "john@example.com"
 *                 role: "CUSTOMER"
 *                 photo_url: "https://example.com/photo.jpg"
 */
router.get('/profile', auth, userController.getProfile);

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     tags: [Users]
 *     summary: Update user profile
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               photo_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Profile updated successfully
 *               data:
 *                 id: "user_id"
 *                 name: "John Doe"
 *                 email: "john@example.com"
 *                 role: "CUSTOMER"
 *                 photo_url: "https://example.com/photo.jpg"
 */
router.put('/profile', auth, userController.updateProfile);

module.exports = router;
