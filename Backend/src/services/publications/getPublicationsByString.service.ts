import Publication from '../../models/publication.model';

export const getPublicationsByStringService = async (string: string) => {
    interface TopicDoc {
        topic: String,
        numberPublication: String
    }
    const docNumTopic: Array<TopicDoc> = [];
    try {
        const docs = await Publication.find({ topic: { $regex: `^${string}`, $options: 'i' }, active: true });
        docs.map(doc => docNumTopic.push({ topic: doc.topic, numberPublication: doc.publicationId }));
        return docNumTopic;
    } catch (error) {
        throw new Error('An error has occurred while searching')
    }
}