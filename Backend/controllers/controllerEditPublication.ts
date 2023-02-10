import { Request, Response } from 'express'
import Publication from "../models/publication";

export const editPublication = async (req: Request, res: Response) => {
    //const { id_Publication, Topic, Category, Detail, Comment } = req.body
    const id = req.params.id
    const update = req.body
    await Publication
        .updateOne({ _id: id }, update)
        .then(data => res.json({ ok: `Se ha modificado ${data.modifiedCount} colección` }))
        .catch(err => console.log(err))
}