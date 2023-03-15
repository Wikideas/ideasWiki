import { Request, Response } from 'express'
import Publication from "../models/publication";

export const editPublication = async (req: Request, res: Response) => {
    const id = req.params.id
    const { Topic, Date_Publication, Date_Ultime_Edit, Category, Detail } = req.body

    try {
        const data = await Publication
            .updateOne({ _id: id }, {
                Topic: Topic,
                Date_Publication: Date_Publication,
                Date_Ultime_Edit: Date_Ultime_Edit,
                Category: Category,
                Detail: Detail,
            })
        res.status(200).json({ ok: `Se ha modificado ${data.matchedCount} colección` })
    } catch (err) {
        console.log(err)
        res.status(400).json({ Error: 'No se ha encontrado el id especificado' })
    }
}