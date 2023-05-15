import { Request, Response } from 'express';
import { getPublicationsByIdCategoryservice } from '../../services/publications/getPublicationsByIdCategory.service';

export const getPublicationsByIdCategoryController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const publicationsRetrieved = await getPublicationsByIdCategoryservice(id);
        res.status(200).json(publicationsRetrieved);
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}