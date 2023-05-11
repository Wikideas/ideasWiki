import CategoryPublication from "../../models/categoryPublication";

export const getCategoriesService = async () => {
    try {
        const categories = await CategoryPublication.find();
        return categories;
    } catch (error) {
        throw new Error('An error occurred while trying to get the categories.');
    }
}