import { Request, Response } from 'express'
import { createSectionService } from '../../services/sections/createSection.service';

export const createSectionController = async (req: Request, res: Response) => {
    const { sections } = req.body;
    try {
        const sectionsIds = await createSectionService(sections);
        res.status(201).json({
            ok: 'Sections successfully created',
            idsCreatedSections: sectionsIds
        });
    } catch (error: any) {
        res.status(500).json({
            error: `${error.message}`
        })
    }
}