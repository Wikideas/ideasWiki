import Category from '../../models/category.model'

export const createCategoryService = async (namecategory: string) => {
    try {
        const existCategory = await Category.findOne({ nameCategory: namecategory })
        if (existCategory) {
            throw new Error('The category could not be inserted because it already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const categoryToInsert = new Category({ nameCategory: namecategory })
    try {
        const savedCategory = await categoryToInsert.save()
        return savedCategory
    } catch (error) {
        throw new Error('An error occurred while trying to save the category')
    }
}
