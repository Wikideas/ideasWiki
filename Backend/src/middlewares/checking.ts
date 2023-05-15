import { check } from 'express-validator'
import { dataValidation } from '../utils/validator'
export const checking = [
    check('topic', 'The topic is required').not().isEmpty(),
    check('topic', ' The category not can get over 100 characters').isLength({ max: 100 }),
    check('detail', 'The detail is required').not().isEmpty(),
    //matches(/^[a-zA-Z0-9\(\)\[\]:\.]+$/).withMessage('msg'),
    check('categoryId', 'The category is required').not().isEmpty(),
    check('categoryId', ' The category not can get over 40 characters').isLength({ max: 30 }),
    dataValidation
]

