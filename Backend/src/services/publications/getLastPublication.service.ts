import Publication from '../../models/publication.model';
import { numb } from '../../utils/countDocs';

export const getLastPublicationService = async () => {
    const countPublications = await numb()
    try {
        const lastPublication = await Publication.findOne({ numberPublication: Number(countPublications) - 1 });
        return lastPublication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}