import { Request, Response } from 'express'
import { createPublicationService } from '../services/createPublication.service';

export const createPublicationController = async (req: Request, res: Response) => {
    const { Topic, Date_Publication, Date_Ultime_Edit, Category, Detail } = req.body
    try {
        await createPublicationService(Topic, Date_Publication, Date_Ultime_Edit, Category, Detail)
        res.status(201).json({
            ok: 'Publication successfully created'
        })
    } catch (error: any) {
        res.status(500).json({
            error: `${error.message}`
        })
    }
}