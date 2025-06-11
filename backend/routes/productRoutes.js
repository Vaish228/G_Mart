const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { upload } = require('../config/cloudinary');

// GET /api/products - Get all products with filters and pagination
router.get('/', productController.getAllProducts);

// GET /api/products/trending - Get trending products
router.get('/trending', productController.getTrendingProducts);

// GET /api/products/:id - Get product by ID
router.get('/:id', productController.getProductById);

// POST /api/products - Create new product with image upload
router.post('/', upload.single('image'), productController.createProduct);

// PUT /api/products/:id - Update product with optional image upload
router.put('/:id', upload.single('image'), productController.updateProduct);

// DELETE /api/products/:id - Delete product
router.delete('/:id', productController.deleteProduct);

// POST /api/products/upload-image - Upload image only
router.post('/upload-image', upload.single('image'), productController.uploadProductImage);

module.exports = router;
