const express = require("express");
const { getAllCategories , createCategory, updateCategory, deleteCategory, getCategoryById } = require("../controllers/CategoryController.js");

const router = express.Router();

// routing api after /api/category/
router.get('/', getAllCategories);
router.get('/:id/', getCategoryById);
router.post('/', createCategory);
router.put('/:id/update/', updateCategory);
router.put('/:id/delete/', deleteCategory);

module.exports = router;