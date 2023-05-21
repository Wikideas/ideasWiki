import { Request, Response } from 'express';
import { getPublicationsService } from '../../services/publications/getPublications.service';
import { numberPublications } from '../../utils/countPublications';

export const getPublicationsController = async (req: Request, res: Response) => {
    const { usePagination = 'false', from = '0', limit = '5' } = req.query;
    try {
        const [[publications, numberOfPublicationsRendered], totalPublications] = await Promise.all([
            getPublicationsService(
                usePagination.toString(),
                from.toString(),
                limit.toString()
            ),
            numberPublications()
        ]);
        res.status(200).json({
            numberOfPublicationsRendered: numberOfPublicationsRendered,
            totalPublications: totalPublications,
            publications: publications
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}