import CategoryPublication from "../models/categoryPublication"

export const createCategoryService = async (namecategory: string) => {
    try {
        const existCategory = await CategoryPublication.findOne({ nameCategory: namecategory })
        if (existCategory) {
            throw new Error('The category could not be inserted because it already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const Category = new CategoryPublication({ nameCategory: namecategory })
    try {
        const savedCategory = await Category.save()
        return savedCategory
    } catch (error) {
        throw new Error('An error occurred while trying to save the category')
    }
}
