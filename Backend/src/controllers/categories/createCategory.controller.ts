import { Request, Response } from 'express'
import { createCategoryService } from '../../services/categories/createCategory.service'

export const createCategoryController = async (req: Request, res: Response) => {
    const { namecategory } = req.body;
    try {
        await createCategoryService(namecategory)
        res.status(201).json({
            ok: 'Category successfully created'
        });
    } catch (error: any) {
        res.status(500).json({
            error: `${error.message}`
        })
    }
}