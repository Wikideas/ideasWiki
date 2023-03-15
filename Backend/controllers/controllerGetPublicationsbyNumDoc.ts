import { Request, Response } from 'express';
import Publication from "../models/publication";

export const getPublicationsbyNumDoc = (req: Request, res: Response) => {
    const { num } = req.params
    Publication.find({ num_Publication: num })
        .then(data => res.json(data))
        .catch(err => console.log(err))
}