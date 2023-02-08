import monggose, { Schema, Document } from 'mongoose'

export interface Publication extends Document {
    id_Publication: string
    Date_Publication: Date
    Date_Ultime_Edit: Date
    Topic: string
    Category: string
    Detail: string
    Comment: string
}

const publicationSchema = new Schema<Publication>({
    id_Publication: {
        type: String,
        unique: true,
        required: true
    },
    Date_Publication: {
        type: Date
    },
    Date_Ultime_Edit: {
        type: Date
    },
    Topic: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Detail: {
        type: String,
        required: true
    },
    Comment: {
        required: true,
        type: String,
    }
})

const Publication = monggose.model<Publication>('Publication', publicationSchema)
export default Publication;