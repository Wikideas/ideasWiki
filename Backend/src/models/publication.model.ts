import mongoose from 'mongoose';
import monggose, { Schema, Document } from 'mongoose';

export interface IPublication extends Document {
    topic: string,
    numberPublication: string
    categoryId: mongoose.Schema.Types.ObjectId
    detail: Array<mongoose.Schema.Types.ObjectId>
    createdAt: Date
    updatedAt: Date
}

const publicationSchema = new Schema<IPublication>({
    numberPublication: {
        type: String,
        unique: true
    },
    topic: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoryPublication',
        required: true
    },
    detail: {
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