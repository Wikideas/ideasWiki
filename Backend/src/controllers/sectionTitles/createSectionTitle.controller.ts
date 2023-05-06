import { Request, Response } from 'express';
import { createSectionTitleService } from '../../services/sectionsTitles/createSectionTitle.service';

export const createSectionTitleController = async (req: Request, res: Response) => {
    const { sectionTitle } = req.body;
    try {
        await createSectionTitleService(sectionTitle)
        res.status(201).json({
            ok: 'Section title successfully created'
        })
    } catch (error: any) {
        res.status(500).json({
            error: `${error.message}`
        })
    }
}