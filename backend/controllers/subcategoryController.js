const Subcategory = require('../models/Subcategory');
const Product = require('../models/Product');

const subcategoryController = {
  // Get all subcategories
  getAllSubcategories: async (req, res) => {
    try {
      const subcategories = await Subcategory.find({ isActive: true })
        .populate('categoryId', 'name')
        .sort({ name: 1 });
      
      res.json({
        success: true,
        data: subcategories,
        count: subcategories.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching subcategories',
        error: error.message
      });
    }
  },

  // Get subcategories by category
  getSubcategoriesByCategory: async (req, res) => {
    try {
      const subcategories = await Subcategory.find({ 
        categoryId: req.params.categoryId,
        isActive: true 
      }).sort({ name: 1 });
      
      res.json({
        success: true,
        data: subcategories,
        count: subcategories.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching subcategories',
        error: error.message
      });
    }
  },

  // Get subcategory by ID with products
  getSubcategoryById: async (req, res) => {
    try {
      const subcategory = await Subcategory.findById(req.params.id)
        .populate('categoryId', 'name');
      
      if (!subcategory) {
        return res.status(404).json({
          success: false,
          message: 'Subcategory not found'
        });
      }

      const products = await Product.find({ 
        subcategoryId: req.params.id,
        isActive: true,
        inStock: true 
      }).sort({ name: 1 });

      res.json({
        success: true,
        data: {
          subcategory,
          products
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching subcategory',
        error: error.message
      });
    }
  },

  // Create new subcategory
  createSubcategory: async (req, res) => {
    try {
      const subcategory = new Subcategory(req.body);
      const savedSubcategory = await subcategory.save();
      await savedSubcategory.populate('categoryId', 'name');
      
      res.status(201).json({
        success: true,
        data: savedSubcategory,
        message: 'Subcategory created successfully'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating subcategory',
        error: error.message
      });
    }
  },

  // Update subcategory
  updateSubcategory: async (req, res) => {
    try {
      const subcategory = await Subcategory.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      ).populate('categoryId', 'name');
      
      if (!subcategory) {
        return res.status(404).json({
          success: false,
          message: 'Subcategory not found'
        });
      }

      res.json({
        success: true,
        data: subcategory,
        message: 'Subcategory updated successfully'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error updating subcategory',
        error: error.message
      });
    }
  },

  // Delete subcategory
  deleteSubcategory: async (req, res) => {
    try {
      const subcategory = await Subcategory.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
      );
      
      if (!subcategory) {
        return res.status(404).json({
          success: false,
          message: 'Subcategory not found'
        });
      }

      res.json({
        success: true,
        message: 'Subcategory deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting subcategory',
        error: error.message
      });
    }
  }
};

module.exports = subcategoryController;
