import { Request, Response } from 'express';
import { getPublicationsbyCategoryService } from '../../services/publications/getPublicationsbyCategory.service';

export const getPublicationsbyIdCategoryController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const publicationsRetrieved = await getPublicationsbyCategoryService(id);
        res.status(200).json(publicationsRetrieved);
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}