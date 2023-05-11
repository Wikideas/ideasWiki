import { Request, Response } from 'express';
import { getSectionImagesService } from '../../services/sectionImages/getSectionImages.service';

export const getSectionImagesController = async (req: Request, res: Response) => {
    try {
        const sectionImagesRetrieved = await getSectionImagesService();
        res.status(200).json({
            sectionImages: sectionImagesRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 