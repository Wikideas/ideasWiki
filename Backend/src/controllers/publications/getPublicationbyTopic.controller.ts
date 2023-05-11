import { Request, Response } from 'express';
import { getPublicationbyTopicService } from '../../services/publications/getPublicationbyTopic.service';

export const getPublicationbyTopicController = async (req: Request, res: Response) => {
    const { Topic } = req.params
    try {
        const publication = await getPublicationbyTopicService(Topic);
        res.status(200).json(publication)
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}