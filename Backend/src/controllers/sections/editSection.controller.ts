import { Request, Response } from 'express';
import { editSectionService } from '../../services/sections/editSection.service';

export const editSectionController = async (req: Request, res: Response) => {
    const { id } = req.params
    const { sectionTitleId, sectionDetail, sectionImageId } = req.body
    try {
        const editedPublication = await editSectionService(id, sectionTitleId, sectionDetail, sectionImageId);
        if (editedPublication.matchedCount == 0) {
            return res.status(404).json({
                message: 'No matches found for the id provided.'
            })
        }
        res.status(200).json({ ok: `The section has been successfully modified. Number of modified records: ${editedPublication.modifiedCount}` });
    } catch (error: any) {
        res.json({ error: `${error.message}` });
    }
}