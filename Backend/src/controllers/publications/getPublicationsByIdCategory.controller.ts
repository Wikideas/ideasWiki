import { Request, Response } from 'express';
import { getPublicationsByIdCategoryservice } from '../../services/publications/getPublicationsByIdCategory.service';
import { collectionsNumber } from '../../utils/countCollections';
import Publication from '../../models/publication.model';

export const getPublicationsByIdCategoryController = async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const { usePagination = 'false', from = '0', limit = '4' } = req.query;
    const filter = { categoryId: categoryId };
    try {
        const [[publications, numberOfPublicationsRendered], totalPublicationsByCategorySelected] = await Promise.all([
            getPublicationsByIdCategoryservice(
                categoryId,
                usePagination.toString(),
                from.toString(),
                limit.toString()
            ),
            collectionsNumber(Publication, filter)
        ]);
        res.status(200).json({
            numberOfPublicationsRendered: numberOfPublicationsRendered,
            totalPublicationsByCategorySelected: totalPublicationsByCategorySelected,
            publications: publications
        });
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
}