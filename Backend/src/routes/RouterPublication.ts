import express from "express";
import { getPublicationsController } from "../controllers/publications/getPublications.controller";
import { createPublicationController } from "../controllers/publications/createPublication.controller";
import { editPublicationController } from "../controllers/publications/editPublication.controller";
import { homeController } from "../controllers/home.controller";
import { checking } from "../middlewares/checking";
import { notFoundRouteController } from "../controllers/notFoundRoute.controller";
import { getPublicationsByStringController } from "../controllers/publications/getPublicationbyString.controller";
import { getPublicationbyNumDocController } from "../controllers/publications/getPublicationsbyNumDoc.controller";
import { getPublicationbyTopicController } from "../controllers/publications/getPublicationbyTopic.controller";
import { getCategoriesController } from "../controllers/categories/getCategories.controller";
import { getPublicationsbyIdCategoryController } from "../controllers/publications/getPublicationsbyCategory.controller"
import { createCategoryController } from "../controllers/categories/createCategory.controller";
import { getLastPublicationController } from "../controllers/publications/getLastPublication.controller";
import { getSuggestedPublicationsController } from "../controllers/publications/getSuggestedPublications.controller";
import { createSectionTitleController } from '../controllers/sectionTitles/createSectionTitle.controller';
import { getSectionTitlesController } from "../controllers/sectionTitles/getSectionTitles.controller";
import { createSectionController } from '../controllers/sections/createSection.controller';
import { getSectionsController } from "../controllers/sections/getSectionsController";
import { getSectionImagesController } from "../controllers/sectionImages/getSectionImages.controller";
import { createSectionImageController } from "../controllers/sectionImages/createSectionImage.controllers";
import { getSectionByIdController } from "../controllers/sections/getSectionById.controller";
import { editSectionController } from "../controllers/sections/editSection.controller";

const fileUpload = require('express-fileupload')({
  useTempFiles: true,
  tempFileDir: './tmp',
});

const router = express.Router()

router.get('/sections', getSectionsController);
router.get('/sections/:id', getSectionByIdController);
router.post('/sections', createSectionController);
router.get('/section-titles', getSectionTitlesController);
router.post('/section-titles', createSectionTitleController);
router.get('/section-images', getSectionImagesController);
router.post('/section-images', fileUpload, createSectionImageController);
router.get('/getPublications', getPublicationsController);
router.get('/getLastPublication', getLastPublicationController);
router.get('/getSuggestedPublications/:numSuggestedPublicationsIn', getSuggestedPublicationsController);
router.get('/getCategory', getCategoriesController);
router.post('/createCategory', createCategoryController);
router.get('/getPublication/:string', getPublicationsByStringController);
router.get('/getPublicationbyNumDoc/:num', getPublicationbyNumDocController);
router.get('/getPublicationbyTopic/:Topic', getPublicationbyTopicController);
router.get('/getPublicationbyIdCategory/:id', getPublicationsbyIdCategoryController);
router.post('/createPublication', fileUpload, createPublicationController);
router.put('/editPublication/:id', checking, editPublicationController);
router.put('/sections/:id', editSectionController);
router.get('', homeController);
router.get('*', notFoundRouteController);

export default router;