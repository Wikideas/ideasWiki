import mongoose from 'mongoose';
import monggose, { Schema, Document } from 'mongoose';

export interface Publication extends Document {
    num_Publication: string
    Date_Publication: Date
    Date_Ultime_Edit: Date
    Topic: string
    Category: mongoose.Schema.Types.ObjectId
<<<<<<< HEAD
    Detail: string
    id_Image: string
    image: string
=======
    Detail: Array<mongoose.Schema.Types.ObjectId>
>>>>>>> v1.0.0
}

const publicationSchema = new Schema<Publication>({
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
        ref: 'Section',
        required: true
    },
    id_Image: {
        type: String
    },
    image: {
        type: String
    }
})

const Publication = monggose.model<Publication>('Publication', publicationSchema)
export default Publication;