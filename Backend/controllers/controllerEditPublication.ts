import { Request, Response } from 'express'
import { TopologyDescriptionChangedEvent } from 'mongodb';
import Publication from "../models/publication";

export const editPublication = async (req: Request, res: Response) => {
    const id = req.params.id
    const { Topic, Date_Publication, Date_Ultime_Edit, Category, Detail } = req.body
    await Publication
        .updateOne({ _id: id }, {
            Topic: Topic,
            Date_Publication: Date_Publication,
            Date_Ultime_Edit: Date_Ultime_Edit,
            Category: Category,
            Detail: Detail,
        })
        .then(data => res.json({ ok: `Se ha modificado ${data.modifiedCount} colección` }))
        .catch(err => console.log(err))
}