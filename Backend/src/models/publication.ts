import mongoose from 'mongoose';
import monggose, { Schema, Document } from 'mongoose';

export interface IPublication extends Document {
    num_Publication: string
    Date_Publication: Date
    Date_Ultime_Edit: Date
    Topic: string
    Category: mongoose.Schema.Types.ObjectId
    Detail: Array<mongoose.Schema.Types.ObjectId>
}

const publicationSchema = new Schema<IPublication>({
    num_Publication: {
        type: String,
        unique: true
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoryPublication',
        required: true
    },
    Detail: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'section',
        required: true
    },
})

const Publication = monggose.model<IPublication>('Publication', publicationSchema)
export default Publication;