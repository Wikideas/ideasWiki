import Publication from '../../models/publication.model';

export const getPublicationsByIdCategoryservice = async (id: String) => {
    try {
        const publications = await Publication.find({ categoryId: { $in: [id] } });
        return publications;
    } catch (error) {
        throw new Error('An error occurred while trying to get the publications.');
    }
}