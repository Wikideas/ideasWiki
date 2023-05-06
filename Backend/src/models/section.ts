import mongoose, { Schema, Document } from 'mongoose'

export interface ISection extends Document {
    sectionTitle: mongoose.Schema.Types.ObjectId,
    sectionDetail: string,
    sectionImage: string,
    cloudinaryImageId: string
}

const sectionSchema = new Schema<ISection>({
    sectionTitle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SectionTitle',
        required: true
    },
    sectionDetail: {
        type: String,
        required: true
    },
    sectionImage: {
        type: String
    },
    cloudinaryImageId: {
        type: String
    }
})
const Section = mongoose.model<ISection>('Section', sectionSchema)
export default Section