import { numberPublications } from '../../utils/countPublications'
import Publication, { IPublication } from '../../models/publication.model'


export const createPublicationService = async (topic: String, categoryId: String, detail: Array<IPublication>) => {
    const numberPublication = await numberPublications();
    try {
        const existPublication = await Publication.findOne({ topic: topic })
        if (existPublication) {
            throw new Error('The collection could not be inserted because the topic already exists.')
        }
    } catch (error: any) {
        throw new Error(`${error.message}`);
    }
    const Post = new Publication({
        numberPublication: Number(numberPublication) + 1,
        topic: topic,
        categoryId: categoryId,
        detail: detail
    })
    try {
        const savedPublication = await Post.save()
        return savedPublication
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while trying to save the publication')
    }
}
