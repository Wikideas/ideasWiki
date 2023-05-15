import { Request, Response } from 'express'
export const notFoundRouteController = (req: Request, res: Response) => {
    res.status(404).json({
        Incorrect_URL: 'Error: the URL not found'
    })
}