import { Request, Response } from 'express';
import { getSectionTitleByIdService } from '../../services/sectionsTitles/getSectionTitleById.service';

export const getSectionTitleByIdController = async (req: Request, res: Response) => {
    const { sectionTitleId } = req.params;
    try {
        const sectionTitleRetrieved = await getSectionTitleByIdService(sectionTitleId);
        res.status(200).json({
            section: sectionTitleRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 