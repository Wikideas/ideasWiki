import { Request, Response } from 'express';
import { getPublicationbyNumDocService } from '../services/getPublicationsbyNumDoc.service';

export const getPublicationbyNumDocController = async (req: Request, res: Response) => {
    const { num } = req.params;
    try {
        const publication = await getPublicationbyNumDocService(num);
        res.status(200).json(publication)
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}