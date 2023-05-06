import { Request, Response } from 'express';
import { getPublicationsService } from '../../services/publications/getPublications.service';

export const getPublicationsController = async (req: Request, res: Response) => {
    try {
        const publicationsRetrieved = await getPublicationsService();
        res.status(200).json(publicationsRetrieved)
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}