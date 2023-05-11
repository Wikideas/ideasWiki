import SectionImage from '../../models/sectionImage';
import { ISectionImage } from '../../models/sectionImage';
const cloudinary = require('../../config/cloudinary.config')

export const createSectionImageService = async (sectionImage: string, cloudinaryImageId: string) => {
    try {
        const existSectionImage = await SectionImage.findOne({ sectionImage: sectionImage })
        if (existSectionImage) {
            throw new Error('The section could not be inserted because it already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const sectionImageToInsert = new SectionImage({ sectionImage: sectionImage, cloudinaryImageId: cloudinaryImageId })
    try {
        const savedsectionImage = await sectionImageToInsert.save()
        return savedsectionImage
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while trying to save the sectionImage')
    }
    
}

export const uploadImage = async (filePath: string) =>{
    return await cloudinary.uploader.upload(filePath, {
        /* Creating a folder in the cloudinary account. */
            folder: 'wikideas_sectionImages'
    })
    }
export const deleteImage = async (id: string) => {
    return await cloudinary.uploader.destroy(id)
    }