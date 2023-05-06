//getSectionTitlesService
import { Request, Response } from 'express';
import { getSectionTitlesService } from '../../services/sectionsTitles/getSectionTitle.service';

export const getSectionTitlesController = async (req: Request, res: Response) => {
    try {
        const sectionTitlesRetrieved = await getSectionTitlesService();
        res.status(200).json({
            sectionTitles: sectionTitlesRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 