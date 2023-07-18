import Publication from '../../models/publication.model';

export const getPublicationsByIdCategoryservice = async (categoryId: String) => {
    try {
        const publications = await Publication.find({ categoryId: { $in: [categoryId] }, active: true });
        return publications;
    } catch (error) {
        throw new Error('An error occurred while trying to get the publications.');
    }
}