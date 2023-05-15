import { Request, Response } from 'express';
import { getPublicationByNumberService } from '../../services/publications/getPublicationByNumber.service';

export const getPublicationByNumberController = async (req: Request, res: Response) => {
    const { numberPublication } = req.params;
    try {
        const publication = await getPublicationByNumberService(numberPublication);
        res.status(200).json({ publication })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}