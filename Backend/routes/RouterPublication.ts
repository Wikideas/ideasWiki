import express, { Request, Response } from "express";

import { getPublications } from "../controllers/controllerGetPublications";
import { createPublication } from "../controllers/controllerCreatePublication";
import { editPublication } from "../controllers/controllerEditPublication";
import { home } from "../controllers/controllerHome";

const router = express.Router()

router.get("/getPublications", getPublications)
router.post("/createPublication", createPublication)
router.put("/editPublication", editPublication)
router.get("", home)

export default router