import mongoose, { Schema, Document } from 'mongoose'

export interface ISectionImage extends Document {
    sectionImageId: string
    sectionImage: string
    cloudinaryImageId: string
    active: boolean
}

const sectionImageSchema = new Schema<ISectionImage>({
    sectionImageId: {
        type: String,
        unique: true
    },
    sectionImage: {
        type: String,
    },
    cloudinaryImageId: {
        type: String,
    },
    active: {
        type: Boolean
    }
})

const SectionImage = mongoose.model<ISectionImage>('SectionImage', sectionImageSchema)
export default SectionImage