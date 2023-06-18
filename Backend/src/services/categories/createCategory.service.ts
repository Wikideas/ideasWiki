import Category from '../../models/category.model';
import { collectionsNumber } from '../../utils/countCollections';

export const createCategoryService = async (namecategory: string) => {
    const numberCategory = await collectionsNumber(Category);
    try {
        const existCategory = await Category.findOne({ nameCategory: namecategory })
        if (existCategory) {
            throw new Error('The category could not be inserted because it already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const categoryToInsert = new Category({
        categoryId: Number(numberCategory) + 1,
        nameCategory: namecategory,
        active: true
    })
    try {
        const savedCategory = await categoryToInsert.save()
        return savedCategory
    } catch (error) {
        throw new Error('An error occurred while trying to save the category')
    }
}
