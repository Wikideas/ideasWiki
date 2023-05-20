import Publication from '../../models/publication.model';

export const getPublicationsService = async (usePagination: any, from: any, limit: any) => {
    try {
        if (usePagination === 'true') {
            const publications = await Publication.find()
                .skip(Number(from))
                .limit(Number(limit));
            return publications;
        } else {
            const publications = await Publication.find();
            return publications;
        }
    } catch (error) {
        throw new Error('An error occurred while trying to get the publications.');
    }
}