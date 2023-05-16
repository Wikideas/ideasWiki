import Publication, { IPublication } from '../../models/publication.model';

export const editPublicationService = async (id: String, topic: String, categoryId: String, detail: Array<IPublication>) => {
    try {
        const editedPublication = await Publication.updateOne({ _id: id }, {
            topic: topic,
            categoryId: categoryId,
            detail: detail,
        })
        return editedPublication;
    } catch (error) {
        throw new Error('An error occurred while trying to update the publication.');
    }
}