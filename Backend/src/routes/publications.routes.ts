import express from "express";
import { getPublicationsController } from "../controllers/publications/getPublications.controller";
import { createPublicationController } from "../controllers/publications/createPublication.controller";
import { editPublicationController } from "../controllers/publications/editPublication.controller";
import { checking } from "../middlewares/checking";
import { getPublicationsByStringController } from "../controllers/publications/getPublicationbyString.controller";
import { getPublicationbyNumDocController } from "../controllers/publications/getPublicationsbyNumDoc.controller";
import { getPublicationbyTopicController } from "../controllers/publications/getPublicationbyTopic.controller";
import { getPublicationsbyIdCategoryController } from "../controllers/publications/getPublicationsbyCategory.controller"
import { getLastPublicationController } from "../controllers/publications/getLastPublication.controller";
import { getSuggestedPublicationsController } from "../controllers/publications/getSuggestedPublications.controller";
const fileUpload = require('express-fileupload')({
  useTempFiles: true,
  tempFileDir: './tmp',
});

const router = express.Router()

router.get('/getPublications', getPublicationsController);
router.get('/getLastPublication', getLastPublicationController);
router.get('/getSuggestedPublications/:numSuggestedPublicationsIn', getSuggestedPublicationsController);
router.get('/getPublication/:string', getPublicationsByStringController);
router.get('/getPublicationbyNumDoc/:num', getPublicationbyNumDocController);
router.get('/getPublicationbyTopic/:Topic', getPublicationbyTopicController);
router.get('/getPublicationbyIdCategory/:id', getPublicationsbyIdCategoryController);
router.post('/createPublication', createPublicationController);
router.put('/editPublication/:id', checking, editPublicationController);

export default router;