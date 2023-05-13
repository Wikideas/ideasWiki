import mongoose from 'mongoose';
import monggose, { Schema, Document } from 'mongoose';

export interface IPublication extends Document {
    num_Publication: string
    Topic: string
    Category: mongoose.Schema.Types.ObjectId
    Detail: Array<mongoose.Schema.Types.ObjectId>
    createdAt: Date
    updatedAt: Date
}

const publicationSchema = new Schema<IPublication>({
    num_Publication: {
        type: String,
        unique: true
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

publicationSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    if (!this.createdAt) {
        this.createdAt = this.updatedAt;
    }
    next();
});

publicationSchema.pre('updateOne', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

const Publication = monggose.model<IPublication>('Publication', publicationSchema)
export default Publication;