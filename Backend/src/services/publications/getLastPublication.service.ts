import Publication from '../../models/publication.model';
import { numberPublications } from '../../utils/countPublications';

export const getLastPublicationService = async () => {
    const countPublications = await numberPublications()
    try {
        const lastPublication = await Publication.findOne({ numberPublication: countPublications });
        return lastPublication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}