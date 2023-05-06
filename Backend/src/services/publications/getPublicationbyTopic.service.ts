import Publication from '../../models/publication';

export const getPublicationbyTopicService = async (Topic: string) => {
    try {
        const publication = await Publication.find({ Topic: { $regex: `^${Topic}`, $options: 'i' } });
        return publication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}