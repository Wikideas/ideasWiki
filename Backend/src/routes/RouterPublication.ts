import express from "express";
import { getPublicationsController } from "../controllers/getPublications.controller";
import { createPublicationController } from "../controllers/createPublication.controller";
import { editPublicationController } from "../controllers/editPublication.controller";
import { homeController } from "../controllers/home.controller";
import { checking } from "../middlewares/checking";
import { notFoundRouteController } from "../controllers/notFoundRoute.controller";
import { getPublicationsByStringController } from "../controllers/getPublicationbyString.controller";
import { getPublicationbyNumDocController } from "../controllers/getPublicationsbyNumDoc.controller";
import { getPublicationbyTopicController } from "../controllers/getPublicationbyTopic.controller";
import { getCategoriesController } from "../controllers/getCategories.controller";
import { getPublicationsbyIdCategoryController } from "../controllers/getPublicationsbyCategory.controller"
import { createCategoryController } from "../controllers/createCategory.controller";
import { getLastPublicationController } from "../controllers/getLastPublication.controller";
import { getSuggestedPublicationsController } from "../controllers/getSuggestedPublications.controller";

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
router.post("/createPublication", checking, createPublicationController);
router.put("/editPublication/:id", checking, editPublicationController);
router.get("", homeController);
router.get("*", notFoundRouteController);

export default router;