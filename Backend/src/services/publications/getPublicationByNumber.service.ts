import Publication from '../../models/publication.model';

export const getPublicationByNumberService = async (numberPublication: string) => {
    try {
        const publication = await Publication.findOne({ numberPublication: numberPublication });
        return publication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}