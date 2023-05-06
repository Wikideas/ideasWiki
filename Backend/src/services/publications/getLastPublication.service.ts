import Publication from '../../models/publication';
import { numb } from '../../utils/countDocs';

export const getLastPublicationService = async () => {
    const numPublications = await numb()
    try {
        const lastPublication = await Publication.find({ num_Publication: Number(numPublications) - 1 });
        return lastPublication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}