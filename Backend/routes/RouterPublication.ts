import express from "express";
import { check } from 'express-validator'
import { dataValidation } from "../utils/validator";
import { getPublications } from "../controllers/controllerGetPublications";
import { createPublication } from "../controllers/controllerCreatePublication";
import { editPublication } from "../controllers/controllerEditPublication";
import { home } from "../controllers/controllerHome";
import { checking } from "../middlewares/checking";

const router = express.Router()

router.get("/getPublications", getPublications)
router.post("/createPublication", checking, createPublication)
router.put("/editPublication/:id", checking, editPublication)
router.get("", home)

export default router