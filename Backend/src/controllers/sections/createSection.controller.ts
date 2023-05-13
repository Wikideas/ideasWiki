import { Request, Response } from 'express';
import { createSectionService } from '../../services/sections/createSection.service';


export const createSectionController = async (req: Request, res: Response) => {
    const { section } = req.body;
    try {
        const sectionId = await createSectionService(section);
        res.status(201).json({
            ok: 'Section successfully created',
            idCreatedSection: sectionId
        });
    } catch (error: any) {
        res.status(500).json({
            error: `${error.message}`
        })
    }
}