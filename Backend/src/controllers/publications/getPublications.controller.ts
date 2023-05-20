import { Request, Response } from 'express';
import { getPublicationsService } from '../../services/publications/getPublications.service';

export const getPublicationsController = async (req: Request, res: Response) => {
    const { usePagination = 'false', from = '0', limit = '5' } = req.query;
    try {
        const publications = await getPublicationsService(usePagination, from, limit);
        res.status(200).json({ publications })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}