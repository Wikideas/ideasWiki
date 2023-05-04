import Publication from '../models/publication';

export const getPublicationbyNumDocService = async (num: string) => {
    try {
        const publication = await Publication.find({ num_Publication: num });
        return publication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}