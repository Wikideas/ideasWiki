import mongoose, { Schema, Document } from 'mongoose'

export interface ISection extends Document {
    sectionTitleId: mongoose.Schema.Types.ObjectId,
    sectionDetail: string,
    sectionImageId: mongoose.Schema.Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
}

const sectionSchema = new Schema<ISection>({
    sectionTitleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sectionTitle',
        required: true
    },
    sectionDetail: {
        type: String,
        required: true
    },
    sectionImageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sectionImage',
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

const Section = mongoose.model<ISection>('Section', sectionSchema)
export default Section