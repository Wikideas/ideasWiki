import mongoose, { Schema, Document } from 'mongoose'

export interface ISectionTitle extends Document {
    sectionTitle: string
}

const sectionTitleSchema = new Schema<ISectionTitle>({
    sectionTitle: {
        type: String,
        required: true
    }
})

const SectionTitle = mongoose.model<ISectionTitle>('SectionTitle', sectionTitleSchema)
export default SectionTitle