import mongoose, { Schema, Document } from 'mongoose'

export interface ISection extends Document {
    sectionId: string
    sectionTitleId: string
    sectionDetail: string
    sectionImageId: string
    createdAt: Date
    updatedAt: Date
    active: boolean
}

const sectionSchema = new Schema<ISection>({
    sectionId: {
        type: String,
        unique: true
    },
    sectionTitleId: {
        type: String,
        ref: 'sectionTitle',
        required: true
    },
    sectionDetail: {
        type: String,
        required: true
    },
    sectionImageId: {
        type: String,
        ref: 'sectionImage',
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

sectionSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    if (!this.createdAt) {
        this.createdAt = this.updatedAt;
    }
    next();
});

sectionSchema.pre('updateOne', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

const Section = mongoose.model<ISection>('section', sectionSchema)
export default Section