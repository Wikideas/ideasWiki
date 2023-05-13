import Publication, { IPublication } from "../../models/publication";

export const editPublicationService = async (id: String, Topic: String, CategoryId: String, Detail: Array<IPublication>) => {
    try {
        const editedPublication = await Publication.updateOne({ _id: id }, {
            Topic: Topic,
            Category: CategoryId,
            Detail: Detail,
        })
        return editedPublication;
    } catch (error) {
        throw new Error('An error occurred while trying to update the publication.');
    }
}