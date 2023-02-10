import { check } from "express-validator"
import { dataValidation } from "../utils/validator"
export const checking = [
    check('Topic', 'The topic is required').not().isEmpty(),
    check('Detail', 'The detail is required').not().isEmpty(),
    check('Category', 'The category is required').not().isEmpty(),
    check('Detail', 'The detail is required').not().isEmpty(),
    dataValidation
]

