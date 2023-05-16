import express from 'express';
import { createSectionTitleController } from '../controllers/sectionTitles/createSectionTitle.controller';
import { getSectionTitlesController } from '../controllers/sectionTitles/getSectionTitles.controller';
import { createSectionController } from '../controllers/sections/createSection.controller';
import { getSectionsController } from '../controllers/sections/getSectionsController';
import { getSectionByIdController } from '../controllers/sections/getSectionById.controller';
import { getSectionImagesController } from '../controllers/sectionImages/getSectionImages.controller';
import { createSectionImageController } from '../controllers/sectionImages/createSectionImage.controllers';
import { editSectionController } from '../controllers/sections/editSection.controller';
const fileUpload = require('express-fileupload')({
  useTempFiles: true,
  tempFileDir: './tmp',
});

const router = express.Router()

//router.post('/sections', getSectionsController);
router.get('/sections/:id', getSectionByIdController);
router.post('/sections', createSectionController);
router.put('/sections/:id', editSectionController);
router.get('/section-titles', getSectionTitlesController);
router.post('/section-titles', createSectionTitleController);
router.get('/section-images', getSectionImagesController);
router.post('/section-images', fileUpload, createSectionImageController);

export default router;
