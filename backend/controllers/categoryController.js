const Category = require('../models/Category');
const Subcategory = require('../models/Subcategory');

const categoryController = {
  // Get all categories
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find().sort({ name: 1 });
      res.json({
        success: true,
        data: categories,
        count: categories.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching categories',
        error: error.message
      });
    }
  },

  // Get category by ID with subcategories
  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({
          success: false,
          message: 'Category not found'
        });
      }

      const subcategories = await Subcategory.find({ 
        categoryId: req.params.id
      }).sort({ name: 1 });

      res.json({
        success: true,
        data: {
          category,
          subcategories
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching category',
        error: error.message
      });
    }
  },

  // Create new category
  createCategory: async (req, res) => {
    try {
      const category = new Category(req.body);
      const savedCategory = await category.save();
      res.status(201).json({
        success: true,
        data: savedCategory,
        message: 'Category created successfully'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating category',
        error: error.message
      });
    }
  },

  // Update category
  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      
      if (!category) {
        return res.status(404).json({
          success: false,
          message: 'Category not found'
        });
      }

      res.json({
        success: true,
        data: category,
        message: 'Category updated successfully'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error updating category',
        error: error.message
      });
    }
  },

  // Delete category
  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      
      if (!category) {
        return res.status(404).json({
          success: false,
          message: 'Category not found'
        });
      }

      res.json({
        success: true,
        message: 'Category deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting category',
        error: error.message
      });
    }
  }
};

module.exports = categoryController;