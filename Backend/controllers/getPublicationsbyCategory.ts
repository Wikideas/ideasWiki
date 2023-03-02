import { Request, Response } from 'express';
import Publication from "../models/publication";

export const getPublicationsbyCategory = (req: Request, res: Response) => {
    const { Category } = req.params
    try {
        Publication.find({ Category })
            .then(data => res.json(data))
            .catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}