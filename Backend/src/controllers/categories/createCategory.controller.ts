import { Request, Response } from 'express'
import { createCategoryService } from '../../services/categories/createCategory.service'

export const createCategoryController = async (req: Request, res: Response) => {
    const { namecategory, shipImage = 'without image yet', bannerImage = 'without image yet' } = req.body;
    try {
        await createCategoryService(namecategory, shipImage, bannerImage)
        res.status(201).json({
            ok: 'Category successfully created'
        });
    } catch (error: any) {
        res.status(500).json({
            error: `${error.message}`
        })
    }
}