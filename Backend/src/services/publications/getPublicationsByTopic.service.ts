import Publication from '../../models/publication.model';

export const getPublicationByTopicService = async (topic: string) => {
    try {
        const publication = await Publication.find({ topic: { $regex: `^${topic}`, $options: 'i' }, active: true });
        return publication;
    } catch (error) {
        throw new Error('An error has occurred on the server, please contact the administrator.');
    }
}