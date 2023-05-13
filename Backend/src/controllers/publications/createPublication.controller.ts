import { Request, Response, NextFunction } from 'express'
import { createPublicationService } from '../../services/publications/createPublication.service';

export const createPublicationController = async (req: Request, res: Response) => {
    const { Topic, CategoryId, Detail } = req.body
    try {
        await createPublicationService(Topic, CategoryId, Detail)
        res.status(201).json({
            ok: 'Publication successfully created'
        })
    } catch (error: any) {
        res.status(500).json({
            error: `${error.message}`
        })
    }
}