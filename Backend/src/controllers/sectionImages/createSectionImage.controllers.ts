import { Request, Response } from 'express';
import { createSectionImageService, deleteImage, uploadImage } from '../../services/sectionImages/createSectionImage.service';

const fs = require('fs/promises');

export const createSectionImageController = async (req: Request, res: Response) => {
    let { sectionImage } = (req as any).files;
    let cloudinaryImageId : string|any; 
    try {

        const imageTemp = await uploadImage(sectionImage.tempFilePath);
        const { secure_url: url, public_id: idImg } = imageTemp;
        sectionImage = url;
        cloudinaryImageId= idImg;

        await fs.rmdir('./tmp', { recursive: true });

        await createSectionImageService(sectionImage, cloudinaryImageId )
        res.status(201).json({
            ok: 'Section image successfully created'
        })
    } catch (error: any) {
        if (sectionImage !== undefined && typeof sectionImage === 'string') {
            await deleteImage(cloudinaryImageId);
        }
        res.status(500).json({
            error: `${error.message}`
        })
    }
}