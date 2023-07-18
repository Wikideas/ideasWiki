import Publication from '../../models/publication.model';
import { collectionsNumber } from '../../utils/countCollections';

export const getSuggestedPublicationsService = async (numberSuggestedPublicationsIn: string) => {
    const numPublicationsExist = await collectionsNumber(Publication);
    let indexes: number[] = [];

    const getIndexes = async () => {
        for (let i = 0; i < Number(numberSuggestedPublicationsIn); i++) {
            let randomNumber = Math.floor(Math.random() * Number(numPublicationsExist)) + 1;
            if (!indexes.includes(randomNumber)) {
                indexes.push(randomNumber)
            } else {
                while (indexes.includes(randomNumber)) {
                    randomNumber = Math.floor(Math.random() * Number(numPublicationsExist)) + 1;
                }
                indexes.push(randomNumber);
            }
        }
        return indexes;
    }
    let indexesObtained = await getIndexes();

    try {
        const suggestedPublications = await Publication.find({ publicationId: { $in: indexesObtained }, active: true });
        return suggestedPublications;
    } catch (error: any) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}