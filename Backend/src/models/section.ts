import mongoose, { Schema, Document } from 'mongoose'

export interface ISection extends Document {
    sectionTitleId: mongoose.Schema.Types.ObjectId,
    sectionDetail: string,
    sectionImageId: mongoose.Schema.Types.ObjectId,
    cloudinaryImageId: string
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
})
const Section = mongoose.model<ISection>('Section', sectionSchema)
export default Section