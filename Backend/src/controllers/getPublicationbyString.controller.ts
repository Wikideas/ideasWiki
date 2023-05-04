import { Request, Response } from 'express';
import { getPublicationsByStringService } from '../services/getPublicationbyString.service';

export const getPublicationsByStringController = async (req: Request, res: Response) => {
    const { string } = req.params;
    try {
        const docNumTopic = await getPublicationsByStringService(string);
        res.status(200).json(docNumTopic);
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}