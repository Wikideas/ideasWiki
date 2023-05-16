import { Request, Response } from 'express';
import { getPublicationByTopicService } from '../../services/publications/getPublicationsByTopic.service';

export const getPublicationByTopicController = async (req: Request, res: Response) => {
    const { topic } = req.params
    try {
        const publication = await getPublicationByTopicService(topic);
        res.status(200).json(publication)
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}