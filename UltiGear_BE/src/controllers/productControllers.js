const models = require('../models');
const ResponseAPI = require('../utils/response');

const productControllers = {
  // Create a new product
  createProduct: async (req, res) => {
    try {
      const { name, category, price, stock, image_url } = req.body;
      const product = await models.Product.create({ name, category, price, stock, image_url }); //ini
      return ResponseAPI.success(res, { product }, 'Product created successfully', 201);
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await models.Product.find();
      return ResponseAPI.success(res, { products }, 'Products retrieved successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Get a product by ID
  getProductById: async (req, res) => {
    try {
      const product = await models.Product.findById(req.params.id);
      if (!product) {
        return ResponseAPI.notFound(res, 'Product not found');
      }
      return ResponseAPI.success(res, { product }, 'Product retrieved successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Update a product
  updateProduct: async (req, res) => {
    try {
      const { name, category, price, stock, image_url } = req.body;
      const product = await models.Product.findByIdAndUpdate(
        req.params.id,
        { name, category, price, stock, image_url },
        { new: true }
      );
      if (!product) {
        return ResponseAPI.notFound(res, 'Product not found');
      }
      return ResponseAPI.success(res, { product }, 'Product updated successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  // Delete a product
  deleteProduct: async (req, res) => {
    try {
      const product = await models.Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return ResponseAPI.notFound(res, 'Product not found');
      }
      return ResponseAPI.success(res, null, 'Product deleted successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  }
};

// Export semua controllers
module.exports = productControllers;
