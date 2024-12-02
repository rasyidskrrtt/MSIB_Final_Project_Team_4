const Product = require('../models/Product');
const ResponseAPI = require('../utils/response');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, category, price, stock, image_url } = req.body;
    const product = await Product.create({ name, category, price, stock, image_url });
    return ResponseAPI.success(res, { product }, 'Product created successfully', 201);
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return ResponseAPI.success(res, { products }, 'Products retrieved successfully');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return ResponseAPI.notFound(res, 'Product not found');
    }
    return ResponseAPI.success(res, { product }, 'Product retrieved successfully');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { name, category, price, stock, image_url } = req.body;
    const product = await Product.findByIdAndUpdate(
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
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return ResponseAPI.notFound(res, 'Product not found');
    }
    return ResponseAPI.success(res, null, 'Product deleted successfully');
  } catch (err) {
    return ResponseAPI.serverError(res, err);
  }
};