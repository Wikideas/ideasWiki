import Category from '../../models/category.model';

export const getCategoriesService = async () => {
    try {
        const categories = await Category.find();
        return categories;
    } catch (error) {
        throw new Error('An error occurred while trying to get the categories.');
    }
}