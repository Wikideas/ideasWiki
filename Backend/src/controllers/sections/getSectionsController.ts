import { Request, Response } from 'express';
import { getSectionsService } from '../../services/sections/getSection.service';

export const getSectionsController = async (req: Request, res: Response) => {
    const { sectionsIds } = req.body;
    try {
        const sectionsRetrieved = await getSectionsService(sectionsIds);
        res.status(200).json({
            sections: sectionsRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 