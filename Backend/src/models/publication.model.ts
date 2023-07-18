import mongoose from 'mongoose';
import monggose, { Schema, Document } from 'mongoose';

export interface IPublication extends Document {
    topic: string
    publicationId: string
    categoryId: string
    detail: Array<string>
    createdAt: Date
    updatedAt: Date
    active: boolean
}

const publicationSchema = new Schema<IPublication>({
    publicationId: {
        type: String,
        unique: true
    },
    topic: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        ref: 'categoryPublication',
        required: true
    },
    detail: {
        type: [String],
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
    },
    active: {
        type: Boolean
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