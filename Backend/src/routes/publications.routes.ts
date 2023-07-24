import express from 'express';
import { getPublicationsController } from '../controllers/publications/getPublications.controller';
import { createPublicationController } from '../controllers/publications/createPublication.controller';
import { editPublicationController } from '../controllers/publications/editPublication.controller';
import { checking } from '../middlewares/checking';
import { getPublicationsByStringController } from '../controllers/publications/getPublicationsByString.controller';
import { getPublicationByIdController } from '../controllers/publications/getPublicationById.controller';
import { getPublicationByTopicController } from '../controllers/publications/getPublicationsByTopic.controller';
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
router.get('/publication-by-publicationId/:publicationId', getPublicationByIdController);
router.get('/publication-by-topic/:topic', getPublicationByTopicController);
router.get('/publications-by-categoryId/:categoryId', getPublicationsByIdCategoryController);
router.post('/publications', createPublicationController);
router.put('/publications/:publicationId', checking, editPublicationController);

export default router;