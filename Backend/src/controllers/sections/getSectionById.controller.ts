import { Request, Response } from 'express';
import { getSectionByIdService } from '../../services/sections/getSectionById.service';

export const getSectionByIdController = async (req: Request, res: Response) => {
    const { sectionId } = req.params;
    try {
        const sectionRetrieved = await getSectionByIdService(sectionId);
        res.status(200).json({
            section: sectionRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 