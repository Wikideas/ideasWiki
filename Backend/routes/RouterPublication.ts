import express from "express";
import { getPublications } from "../controllers/controllerGetPublications";
import { createPublication } from "../controllers/controllerCreatePublication";
import { editPublication } from "../controllers/controllerEditPublication";
import { home } from "../controllers/controllerHome";
import { checking } from "../middlewares/checking";
import { notFoundRoute } from "../controllers/controllerNotFoundRoute";
import { getPublicationByString } from "../controllers/controllerGetPublicationbyString";
import { getPublicationsbyNumDoc } from "../controllers/controllerGetPublicationsbyNumDoc";
import { getPublicationsbyTopic } from "../controllers/controllerGetPublicationbyTopic";
import { getCategory } from "../controllers/controllerGetCategory";
import { getPublicationsbyIdCategory } from "../controllers/getPublicationsbyCategory"
import { createCategory } from "../controllers/controllerCreateCategory";
import { getLastPublication } from "../controllers/controllerGetLastPublication";
import { getSuggestedPublications } from "../controllers/controllerGetSuggestedPublications";

const router = express.Router()

router.get("/getPublications", getPublications)
router.get("/getLastPublication", getLastPublication)
router.get("/getSuggestedPublications/:numSuggestedPublicationsIn", getSuggestedPublications)
router.get("/getCategory", getCategory)
router.post("/createCategory", createCategory)
router.get("/getPublication/:string", getPublicationByString)
router.get("/getPublicationbyNumDoc/:num", getPublicationsbyNumDoc)
router.get("/getPublicationbyTopic/:Topic", getPublicationsbyTopic)
router.get("/getPublicationbyIdCategory/:id", getPublicationsbyIdCategory)
router.post("/createPublication", checking, createPublication)
router.put("/editPublication/:id", checking, editPublication)
router.get("", home)
router.get("*", notFoundRoute)

export default router