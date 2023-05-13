import express from "express";
import { getCategoriesController } from "../controllers/categories/getCategories.controller";
import { createCategoryController } from "../controllers/categories/createCategory.controller";

const router = express.Router()

router.get('/getCategory', getCategoriesController);
router.post('/createCategory', createCategoryController);

export default router;