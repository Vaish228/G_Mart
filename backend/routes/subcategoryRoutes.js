const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

// GET /api/subcategories - Get all subcategories
router.get('/', subcategoryController.getAllSubcategories);

// GET /api/subcategories/category/:categoryId - Get subcategories by category
router.get('/category/:categoryId', subcategoryController.getSubcategoriesByCategory);

// GET /api/subcategories/:id - Get subcategory by ID with products
router.get('/:id', subcategoryController.getSubcategoryById);

// POST /api/subcategories - Create new subcategory
router.post('/', subcategoryController.createSubcategory);

// PUT /api/subcategories/:id - Update subcategory
router.put('/:id', subcategoryController.updateSubcategory);

// DELETE /api/subcategories/:id - Delete subcategory
router.delete('/:id', subcategoryController.deleteSubcategory);

module.exports = router;