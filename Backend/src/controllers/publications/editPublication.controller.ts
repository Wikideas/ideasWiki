import { Request, Response } from 'express';
import { editPublicationService } from '../../services/publications/editPublication.service';

export const editPublicationController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { topic, categoryId, detail } = req.body;
    try {
        const editedPublication = await editPublicationService(id, topic, categoryId, detail);
        if (editedPublication.matchedCount == 0) {
            return res.status(404).json({
                message: 'No matches found for the id provided.'
            })
        }
        res.status(200).json({ ok: `The post has been successfully modified. Number of modified records: ${editedPublication.modifiedCount}` });
    } catch (error: any) {
        res.json({ error: `${error.message}` });
    }
}