import { Request, Response } from 'express';
import { getPublicationByIdService } from '../../services/publications/getPublicationById.service';

export const getPublicationByIdController = async (req: Request, res: Response) => {
    const { publicationId } = req.params;
    try {
        const publication = await getPublicationByIdService(publicationId);
        res.status(200).json({ publication })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}