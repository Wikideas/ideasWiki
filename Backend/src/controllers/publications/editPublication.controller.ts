import { Request, Response } from 'express';
import { editPublicationService } from '../../services/publications/editPublication.service';

export const editPublicationController = async (req: Request, res: Response) => {
    const id = req.params.id
    const { Topic, Category, Detail } = req.body
    try {
        const editedPublication = await editPublicationService(id, Topic, Category, Detail);
        if (editedPublication.matchedCount == 0) {
            return res.status(404).json({
                message: 'No matches found for the id provided.'
            })
        }
        res.status(200).json({ ok: `Se ha modificado ${editedPublication.modifiedCount} colección` });
    } catch (error: any) {
        res.json({ error: `${error.message}` });
    }
}