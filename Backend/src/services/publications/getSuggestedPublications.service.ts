import Publication from '../../models/publication';
import { numb } from '../../utils/countDocs';

export const getSuggestedPublicationsService = async (numSuggestedPublicationsIn: string) => {
    const numPublicationsExist = await numb();
    let indexes: number[] = [];

    const getIndexes = async () => {
        for (let i = 0; i < Number(numSuggestedPublicationsIn); i++) {
            let randomNumber = Math.floor(Math.random() * Number(numPublicationsExist));
            if (!indexes.includes(randomNumber)) {
                indexes.push(randomNumber)
            } else {
                while (indexes.includes(randomNumber)) {
                    randomNumber = Math.floor(Math.random() * Number(numPublicationsExist));
                }
                indexes.push(randomNumber);
            }
        }
        return indexes;
    }
    let indexesObtained = await getIndexes();

    try {
        const suggestedPublications = await Publication.find({ num_Publication: { $in: indexesObtained } });
        return suggestedPublications;
    } catch (error: any) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}