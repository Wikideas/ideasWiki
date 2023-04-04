import { Request, Response } from "express";
import Publication from "../models/publication";
import { numb } from '../utils/countDocs'

export const getLastPublication = async (req: Request, res: Response) => {
    const numPublications = await numb()
    try {
        const lastPublication = await Publication.find({ num_Publication: Number(numPublications) - 1 })
        res.status(200).json({ lastPublication })
    } catch (error) {
        res.status(500).json({
            error: "An error has occurred on the server, please contact the administrator."
        })
    }
}
