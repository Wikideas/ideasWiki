import { numb } from '../utils/countDocs'
import Publication from '../models/publication'
const cloudinary = require('../config/cloudinary.config')


export const createPublicationService = async (Topic: String, Date_Publication: Date, Date_Ultime_Edit: Date, Category: String, Detail: String, id_Image: String, image: String) => {
    const numPublication = await numb();
    try {
        const existPublication = await Publication.findOne({ Topic: Topic })
        if (existPublication) {
            throw new Error('The collection could not be inserted because the topic already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`)
    }
    const Post = new Publication({
        num_Publication: numPublication,
        Topic: Topic,
        Date_Publication: Date_Publication,
        Date_Ultime_Edit: Date_Ultime_Edit,
        Category: Category,
        Detail: Detail,
        id_Image: id_Image,
        image: image
    })
    console.log("Post", Post)
    try {
        const savedPublication = await Post.save()
        return savedPublication
    } catch (error) {
        throw new Error('An error occurred while trying to save the publication')
    }
}

    export const uploadImage = async (filePath: string) =>{
        return await cloudinary.uploader.upload(filePath, {
        /* Creating a folder in the cloudinary account. */
            folder: 'wikideas_publications'
            })
        }

    export const deleteImage = async (id: string) => {
        return await cloudinary.uploader.destroy(id)
    }