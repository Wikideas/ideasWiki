import { Request, Response } from 'express';
import { getCategoriesService } from '../../services/categories/getCategories.service';

export const getCategoriesController = async (req: Request, res: Response) => {
    try {
        const categoriesRetrieved = await getCategoriesService();
        res.status(200).json({
            categories: categoriesRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 