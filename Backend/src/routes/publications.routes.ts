import express from 'express';
import { getPublicationsController } from '../controllers/publications/getPublications.controller';
import { createPublicationController } from '../controllers/publications/createPublication.controller';
import { editPublicationController } from '../controllers/publications/editPublication.controller';
import { checking } from '../middlewares/checking';
import { getPublicationsByStringController } from '../controllers/publications/getPublicationsByString.controller';
import { getPublicationByNumberController } from '../controllers/publications/getPublicationByNumber.controller';
import { getPublicationByTopicController } from '../controllers/publications/getPublicationByTopic.controller';
import { getPublicationsByIdCategoryController } from '../controllers/publications/getPublicationsByIdCategory.controller';
import { getLastPublicationController } from '../controllers/publications/getLastPublication.controller';
import { getSuggestedPublicationsController } from '../controllers/publications/getSuggestedPublications.controller';
const fileUpload = require('express-fileupload')({
  useTempFiles: true,
  tempFileDir: './tmp',
});

const router = express.Router()

router.get('/publications', getPublicationsController);
router.get('/last-publication', getLastPublicationController);
router.get('/suggested-publications/:numberSuggestedPublicationsIn', getSuggestedPublicationsController);
router.get('/publications-by-string/:string', getPublicationsByStringController);
router.get('/publication-by-number/:numberPublication', getPublicationByNumberController);
router.get('/publication-by-topic/:topic', getPublicationByTopicController);
router.get('/publications-by-id-category/:id', getPublicationsByIdCategoryController);
router.post('/publications', createPublicationController);
router.put('/publications/:id', checking, editPublicationController);

export default router;