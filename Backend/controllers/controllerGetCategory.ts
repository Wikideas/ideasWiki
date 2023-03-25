import { Request, Response } from "express"
import CategoryPublication from "../models/categoryPublication"

export const getCategory = (req: Request, res: Response) => {
    CategoryPublication.find()
        .then((data) => {
            res.status(200).json({
                data
            })
        }).catch((error) => {
            console.log(error)
        })
} 