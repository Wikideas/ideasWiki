import Publication from '../models/publication';

export const getPublicationsbyCategoryService = async (id: String) => {
    try {
        const publications = await Publication.find({ Category: { $in: [id] } });
        return publications;
    } catch (error) {
        throw new Error('An error occurred while trying to get the publications.');
    }
}