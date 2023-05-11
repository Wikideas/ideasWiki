import Publication, { IPublication } from "../../models/publication";

export const editPublicationService = async (id: String, Topic: String, Date_Publication: Date, Date_Ultime_Edit: Date, Category: String, Detail: Array<IPublication>) => {
    try {
        const editedPublication = await Publication.updateOne({ _id: id }, {
            Topic: Topic,
            Date_Publication: Date_Publication,
            Date_Ultime_Edit: Date_Ultime_Edit,
            Category: Category,
            Detail: Detail,
        })
        return editedPublication;
    } catch (error) {
        throw new Error('An error occurred while trying to update the publication.');
    }
}