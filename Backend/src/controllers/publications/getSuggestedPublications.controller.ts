import { Response, Request } from 'express';
import { getSuggestedPublicationsService } from '../../services/publications/getSuggestedPublications.service';

export const getSuggestedPublicationsController = async (req: Request, res: Response) => {
    const { numSuggestedPublicationsIn } = req.params;
    try {
        const suggestedPublications = await getSuggestedPublicationsService(numSuggestedPublicationsIn);
        res.status(200).json({
            suggestedPublications
        });
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}