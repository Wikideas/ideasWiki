import express, { Request, Response } from 'express';
import Publication from "../models/publication";

export const getPublications = (req: Request, res: Response) => {
    Publication.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))
}