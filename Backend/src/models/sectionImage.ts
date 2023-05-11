import mongoose, { Schema, Document } from 'mongoose'

export interface ISectionImage extends Document {
    sectionImage: string,
    cloudinaryImageId: string
}

const sectionImageSchema = new Schema<ISectionImage>({
    sectionImage: {
        type: String,
    },
    cloudinaryImageId: {
        type: String,
    }
})

const SectionImage = mongoose.model<ISectionImage>('SectionImage', sectionImageSchema)
export default SectionImage