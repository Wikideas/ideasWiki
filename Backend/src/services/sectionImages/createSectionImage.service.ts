import SectionImage from '../../models/sectionImage.model';
import { collectionsNumber } from '../../utils/countCollections';
const cloudinary = require('../../config/cloudinary.config')

export const createSectionImageService = async (sectionImage: string, cloudinaryImageId: string) => {
    const numberSectionImage = await collectionsNumber(SectionImage);
    try {
        const existSectionImage = await SectionImage.findOne({ sectionImage: sectionImage })
        if (existSectionImage) {
            throw new Error('The section could not be inserted because it already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const sectionImageToInsert = new SectionImage({
        sectionImageId: Number(numberSectionImage) + 1,
        sectionImage: sectionImage,
        cloudinaryImageId: cloudinaryImageId,
        active: true
    })
    try {
        const savedsectionImage = await sectionImageToInsert.save()
        return savedsectionImage
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while trying to save the sectionImage')
    }

}

export const uploadImage = async (filePath: string) => {
    return await cloudinary.uploader.upload(filePath, {
        /* Creating a folder in the cloudinary account. */
        folder: 'wikideas_sectionImages'
    })
}
export const deleteImage = async (id: string) => {
    return await cloudinary.uploader.destroy(id)
}