import express from 'express';
import { homeController } from '../controllers/home.controller';
import { notFoundRouteController } from '../controllers/notFoundRoute.controller';

const router = express.Router()

router.get('', homeController);
router.get('*', notFoundRouteController);

export default router;