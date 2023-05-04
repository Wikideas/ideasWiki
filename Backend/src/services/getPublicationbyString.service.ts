import Publication from '../models/publication';

export const getPublicationsByStringService = async (string: string) => {
    interface TopicDoc {
        Topic: String,
        NumDoc: String
    }
    const docNumTopic: Array<TopicDoc> = [];
    try {
        const docs = await Publication.find({ Topic: { $regex: `^${string}`, $options: 'i' } });
        docs.map(doc => docNumTopic.push({ Topic: doc.Topic, NumDoc: doc.num_Publication }));
        return docNumTopic;
    } catch (error) {
        throw new Error('An error has occurred while searching');
    }
}