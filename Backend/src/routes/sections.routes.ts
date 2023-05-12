import express from "express";
import { createSectionTitleController } from '../controllers/sectionTitles/createSectionTitle.controller';
import { getSectionTitlesController } from "../controllers/sectionTitles/getSectionTitles.controller";
import { createSectionController } from '../controllers/sections/createSection.controller';
import { getSectionsController } from "../controllers/sections/getSectionsController";
import { getSectionImagesController } from "../controllers/sectionImages/getSectionImages.controller";
import { createSectionImageController } from "../controllers/sectionImages/createSectionImage.controllers";
const fileUpload = require('express-fileupload')({
  useTempFiles: true,
  tempFileDir: './tmp',
});

const router = express.Router()

router.post('/sections', getSectionsController);
router.post('/createSection', createSectionController);
router.get('/section-titles', getSectionTitlesController);
router.post('/section-titles', createSectionTitleController);
router.get('/section-images',  getSectionImagesController);
router.post('/section-images', fileUpload, createSectionImageController);

export default router;
