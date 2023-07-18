import Publication from '../../models/publication.model';
import { collectionsNumber } from '../../utils/countCollections';

export const getLastPublicationService = async () => {
    const countPublications = await collectionsNumber(Publication)
    try {
        const lastPublication = await Publication.findOne({ publicationId: countPublications, active: true });
        return lastPublication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}