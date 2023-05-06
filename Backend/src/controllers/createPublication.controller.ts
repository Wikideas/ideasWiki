import { Request, Response, NextFunction } from 'express'
import { createPublicationService, deleteImage, uploadImage } from '../services/createPublication.service';
const fs = require('fs/promises');

export const createPublicationController = async (req: Request, res: Response, next: NextFunction) => {
    const { Topic, Date_Publication, Date_Ultime_Edit, Category, Detail } = req.body
    let { image } = (req as any).files || {};
    let id_Image: string | any; 

    try {

        const imageTemp = await uploadImage(image.tempFilePath);
        const { secure_url: url, public_id: idImg } = imageTemp;
        image = url;
        id_Image = idImg;

        await fs.rmdir('./tmp', { recursive: true });

        await createPublicationService(Topic, Date_Publication, Date_Ultime_Edit, Category, Detail, id_Image, image)
        res.status(201).json({
            ok: 'Publication successfully created'
        })
    } catch (error: any) {
        if (image !== undefined && typeof image === 'string') {
            await deleteImage(id_Image);
        }
        next(error);
        res.status(500).json({
            error: `${error.message}`
        })
    }
}