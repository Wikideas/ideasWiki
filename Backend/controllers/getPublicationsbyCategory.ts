import { Request, Response } from 'express';
import Publication from "../models/publication";

export const getPublicationsbyIdCategory = (req: Request, res: Response) => {
    const { id } = req.params
    try {
        Publication.find({ Category: { $in: [id] } })
            .then(data => res.json(data))
            .catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}