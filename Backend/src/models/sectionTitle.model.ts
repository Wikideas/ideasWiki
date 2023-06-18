import mongoose, { Schema, Document } from 'mongoose'

export interface ISectionTitle extends Document {
    sectionTitleId: string
    sectionTitle: string
    active: boolean
}

const sectionTitleSchema = new Schema<ISectionTitle>({
    sectionTitleId: {
        type: String,
        unique: true
    },
    sectionTitle: {
        type: String,
        required: true
    },
    active: {
        type: Boolean
    }
})

const SectionTitle = mongoose.model<ISectionTitle>('SectionTitle', sectionTitleSchema)
export default SectionTitle