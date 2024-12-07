const models = require('../models');
const ResponseAPI = require('../utils/response');
const { imageUpload } = require('../utils/imageUtil'); 

const productControllers = {
  
  createProduct: async (req, res) => {
    try {
      const { name, category, price, stock, description } = req.body;
      let image_url;

      if (req.file) {
        
        const uploadResult = await imageUpload(req.file);
        image_url = uploadResult;
      } else {
        image_url = req.body.image_url; 
      }

      const product = await models.Product.create({
        name,
        category,
        price,
        stock,
        description,
        image_url, 
      });

      return ResponseAPI.success(res, { product }, 'Product created successfully', 201);
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await models.Product.find();
      return ResponseAPI.success(res, { products }, 'Products retrieved successfully');
    } catch (err) {
      return ResponseAPI.serverError(res, err);
    }
  },

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

  updateProduct: async (req, res) => {
    try {
      const { name, category, price, stock } = req.body;
      let image_url = req.body.image_url;

      // Upload image if a new one is provided
      if (req.file) {
        image_url = await imageUpload(req.file);
      }

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
  },
};

// Export semua controllers
module.exports = productControllers;
