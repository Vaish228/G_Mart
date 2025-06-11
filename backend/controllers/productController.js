const Product = require('../models/Product');
const { cloudinary } = require('../config/cloudinary');

const productController = {
  // Get all products with pagination and filters
  getAllProducts: async (req, res) => {
    try {
      const { 
        page = 1, 
        limit = 20, 
        categoryId, 
        subcategoryId, 
        minPrice, 
        maxPrice, 
        rating,
        search 
      } = req.query;

      const filter = {};
      
      if (categoryId) filter.categoryId = categoryId;
      if (subcategoryId) filter.subcategoryId = subcategoryId;
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
      }
      if (rating) filter.rating = { $gte: Number(rating) };
      if (search) {
        filter.name = { $regex: search, $options: 'i' };
      }

      const skip = (page - 1) * limit;
      
      const products = await Product.find(filter)
        .populate('categoryId', 'name')
        .populate('subcategoryId', 'name')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit));

      const total = await Product.countDocuments(filter);

      res.json({
        success: true,
        data: products,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: Number(limit)
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching products',
        error: error.message
      });
    }
  },

  // Get product by ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
        .populate('categoryId', 'name')
        .populate('subcategoryId', 'name');
      
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }

      res.json({
        success: true,
        data: product
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching product',
        error: error.message
      });
    }
  },

  // Create new product with image upload
  createProduct: async (req, res) => {
    try {
      const productData = { ...req.body };
      
      // Add image URL if file was uploaded
      if (req.file) {
        productData.image = req.file.path;
  productData.imagePublicId = req.file.filename || req.file.public_id; // Cloudinary URL
      }

      const product = new Product(productData);
      const savedProduct = await product.save();
      await savedProduct.populate([
        { path: 'categoryId', select: 'name' },
        { path: 'subcategoryId', select: 'name' }
      ]);
      
      res.status(201).json({
        success: true,
        data: savedProduct,
        message: 'Product created successfully'
      });
    } catch (error) {
      // Delete uploaded image if product creation fails
      if (req.file) {
        try {
          await cloudinary.uploader.destroy(req.file.filename || req.file.public_id);
        } catch (deleteError) {
          console.error('Error deleting image:', deleteError);
        }
      }
      
      res.status(400).json({
        success: false,
        message: 'Error creating product',
        error: error.message
      });
    }
  },

  // Update product with optional image upload
  updateProduct: async (req, res) => {
    try {
      const productData = { ...req.body };
      
      // Get existing product to check for old image
      const existingProduct = await Product.findById(req.params.id);
      if (!existingProduct) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }

      // Add new image URL if file was uploaded
      if (req.file) {
        productData.image = req.file.path; // New Cloudinary URL
        
        // Delete old image from Cloudinary if it exists
        if (existingProduct.image) {
          try {
            const imageUrl = existingProduct.image;
const segments = imageUrl.split('/');
const fileNameWithExtension = segments[segments.length - 1];
const publicId = `gmart-products/${fileNameWithExtension.split('.')[0]}`;
await cloudinary.uploader.destroy(publicId);

          } catch (deleteError) {
            console.error('Error deleting old image:', deleteError);
          }
        }
      }

      const product = await Product.findByIdAndUpdate(
        req.params.id,
        productData,
        { new: true, runValidators: true }
      ).populate([
        { path: 'categoryId', select: 'name' },
        { path: 'subcategoryId', select: 'name' }
      ]);

      res.json({
        success: true,
        data: product,
        message: 'Product updated successfully'
      });
    } catch (error) {
      // Delete uploaded image if update fails
      if (req.file) {
        try {
          await cloudinary.uploader.destroy(req.file.filename);
        } catch (deleteError) {
          console.error('Error deleting image:', deleteError);
        }
      }
      
      res.status(400).json({
        success: false,
        message: 'Error updating product',
        error: error.message
      });
    }
  },

  // Delete product
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }

      // Delete image from Cloudinary if it exists
      if (product.image) {
        try {
          const publicId = product.image.split('/').pop().split('.')[0];
          await cloudinary.uploader.destroy(`gmart-products/${publicId}`);
        } catch (deleteError) {
          console.error('Error deleting image:', deleteError);
        }
      }

      await Product.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: 'Product deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting product',
        error: error.message
      });
    }
  },

  // Get trending products
  getTrendingProducts: async (req, res) => {
    try {
      const products = await Product.find({
        rating: { $gte: 4 }
      })
      .populate('categoryId', 'name')
      .populate('subcategoryId', 'name')
      .sort({ rating: -1, createdAt: -1 })
      .limit(12);

      res.json({
        success: true,
        data: products,
        count: products.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching trending products',
        error: error.message
      });
    }
  },

  // Upload product image only
  uploadProductImage: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No image file provided'
        });
      }

      res.json({
        success: true,
        data: {
          imageUrl: req.file.path,
          publicId: req.file.filename
        },
        message: 'Image uploaded successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error uploading image',
        error: error.message
      });
    }
  }
};

module.exports = productController;