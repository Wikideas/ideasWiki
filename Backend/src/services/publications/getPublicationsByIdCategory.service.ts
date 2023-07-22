import Publication, { IPublication } from '../../models/publication.model';

export const getPublicationsByIdCategoryservice = async (categoryId: String, usePagination: string, from: string, limit: string) => {
    let publications: Array<IPublication> = [];
    let numberOfPublicationsObtained: number = 0;
    try {
        if (usePagination === 'true') {
            publications = await Publication.find({ categoryId: { $in: [categoryId] }, active: true })
                .skip(Number(from))
                .limit(Number(limit));
            numberOfPublicationsObtained = publications.length;
        } else {
            publications = await Publication.find({ categoryId: { $in: [categoryId] }, active: true });
            numberOfPublicationsObtained = publications.length;
        }
        return [publications, numberOfPublicationsObtained];
    } catch (error) {
        throw new Error('An error occurred while trying to get the publications by category.');
    }
}