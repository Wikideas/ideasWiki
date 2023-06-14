import { Request, Response } from 'express';
import { getSectionImageByIdService } from '../../services/sectionImages/getSectionImageById.service';

export const getSectionImageByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const sectionImageRetrieved = await getSectionImageByIdService(id);
        res.status(200).json({
            section: sectionImageRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 