import { Request, Response } from 'express';
import Publication from "../models/publication";

export const getPublicationsbyTopic = (req: Request, res: Response) => {
    const { Topic } = req.params
    Publication.find({ Topic: { $regex: `^${Topic}`, $options: 'i' } })
        .then(data => res.json(data))
        .catch(err => console.log(err))
}