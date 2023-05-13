import { numb } from '../../utils/countDocs'
import Publication, { IPublication } from '../../models/publication'


export const createPublicationService = async (Topic: String, CategoryId: String, Detail: Array<IPublication>) => {
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
        CategoryId: CategoryId,
        Detail: Detail,
    })
    try {
        const savedPublication = await Post.save()
        return savedPublication
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while trying to save the publication')
    }
}
