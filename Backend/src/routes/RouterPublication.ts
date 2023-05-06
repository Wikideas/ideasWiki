import express from "express";
import { getPublicationsController } from "../controllers/publications/getPublications.controller";
import { createPublicationController } from "../controllers/publications/createPublication.controller";
import { editPublicationController } from "../controllers/publications/editPublication.controller";
import { homeController } from "../controllers/home.controller";
import { checking } from "../middlewares/checking";
import { notFoundRouteController } from "../controllers/notFoundRoute.controller";
<<<<<<< HEAD
import { getPublicationsByStringController } from "../controllers/getPublicationbyString.controller";
import { getPublicationbyNumDocController } from "../controllers/getPublicationsbyNumDoc.controller";
import { getPublicationbyTopicController } from "../controllers/getPublicationbyTopic.controller";
import { getCategoriesController } from "../controllers/getCategories.controller";
import { getPublicationsbyIdCategoryController } from "../controllers/getPublicationsbyCategory.controller"
import { createCategoryController } from "../controllers/createCategory.controller";
import { getLastPublicationController } from "../controllers/getLastPublication.controller";
import { getSuggestedPublicationsController } from "../controllers/getSuggestedPublications.controller";
const fileUpload = require('express-fileupload')({
  useTempFiles: true,
  tempFileDir: './tmp',
});

const router = express.Router()

router.get("/getPublications", getPublicationsController);
router.get("/getLastPublication", getLastPublicationController);
router.get("/getSuggestedPublications/:numSuggestedPublicationsIn", getSuggestedPublicationsController);
router.get("/getCategory", getCategoriesController);
router.post("/createCategory", createCategoryController);
router.get("/getPublication/:string", getPublicationsByStringController);
router.get("/getPublicationbyNumDoc/:num", getPublicationbyNumDocController);
router.get("/getPublicationbyTopic/:Topic", getPublicationbyTopicController);
router.get("/getPublicationbyIdCategory/:id", getPublicationsbyIdCategoryController);
router.post("/createPublication", fileUpload, createPublicationController);
router.put("/editPublication/:id", checking, editPublicationController);
router.get("", homeController);
router.get("*", notFoundRouteController);
=======
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

const router = express.Router()

router.get('/sections', getSectionsController);
router.post('/sections', createSectionController);
router.get('/section-titles', getSectionTitlesController);
router.post('/section-titles', createSectionTitleController);
router.get('/getPublications', getPublicationsController);
router.get('/getLastPublication', getLastPublicationController);
router.get('/getSuggestedPublications/:numSuggestedPublicationsIn', getSuggestedPublicationsController);
router.get('/getCategory', getCategoriesController);
router.post('/createCategory', createCategoryController);
router.get('/getPublication/:string', getPublicationsByStringController);
router.get('/getPublicationbyNumDoc/:num', getPublicationbyNumDocController);
router.get('/getPublicationbyTopic/:Topic', getPublicationbyTopicController);
router.get('/getPublicationbyIdCategory/:id', getPublicationsbyIdCategoryController);
router.post('/createPublication', checking, createPublicationController);
router.put('/editPublication/:id', checking, editPublicationController);
router.get('', homeController);
router.get('*', notFoundRouteController);
>>>>>>> v1.0.0

export default router;