import { Request, Response } from "express"
export const notFoundRoute = (req: Request, res: Response) => {
    res.status(404).json({
        Incorrect_URL: "Error: the URL not found"
    })
}