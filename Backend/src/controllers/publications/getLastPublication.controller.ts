import { Request, Response } from 'express';
import { getLastPublicationService } from '../../services/publications/getLastPublication.service';

export const getLastPublicationController = async (req: Request, res: Response) => {
    try {
        const lastPublication = await getLastPublicationService();
        res.status(200).json({ lastPublication });
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}