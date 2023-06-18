import Publication from '../../models/publication.model';

export const getPublicationByIdService = async (publicationId: string) => {
    try {
        const publication = await Publication.findOne({ publicationId: publicationId, active: true });
        return publication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}