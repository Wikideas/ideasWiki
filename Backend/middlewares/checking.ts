import { check } from "express-validator"
import { dataValidation } from "../utils/validator"
export const checking = [
    check('Topic', 'The topic is required').not().isEmpty(),
    check('Topic', ' The category not can get over 100 characters').isLength({ max: 100 }),
    check('Detail', 'The detail is required').not().isEmpty(),
    //matches(/^[a-zA-Z0-9\(\)\[\]:\.]+$/).withMessage("msg"),
    check('Category', 'The category is required').not().isEmpty(),
    check('Category', ' The category not can get over 20 characters').isLength({ max: 20 }),
    dataValidation
]

