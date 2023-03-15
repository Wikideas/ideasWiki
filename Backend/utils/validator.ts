import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const dataValidation = (req: Request, res: Response, next: NextFunction) => {
    const Result = validationResult(req)
    if (!Result.isEmpty()) {
        return res.status(404).json({
            ok: false,
            errors: Result.mapped()
        })
    }
    next();
}