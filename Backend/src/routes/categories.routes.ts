import express from 'express';
import { getCategoriesController } from '../controllers/categories/getCategories.controller';
import { createCategoryController } from '../controllers/categories/createCategory.controller';

const router = express.Router()

router.get('/categories', getCategoriesController);
router.post('/categories', createCategoryController);

export default router;