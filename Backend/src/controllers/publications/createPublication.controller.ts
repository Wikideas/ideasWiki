import { Request, Response, NextFunction } from 'express'
import { createPublicationService } from '../../services/publications/createPublication.service';

export const createPublicationController = async (req: Request, res: Response, next: NextFunction) => {
    const { Topic, Date_Publication, Date_Ultime_Edit, Category, Detail} = req.body

    try {

        await createPublicationService(Topic, Date_Publication, Date_Ultime_Edit, Category, Detail )
        res.status(201).json({
            ok: 'Publication successfully created'
        })
    } catch (error: any) {
        next(error);
        res.status(500).json({
            error: `${error.message}`
        })
    }
}