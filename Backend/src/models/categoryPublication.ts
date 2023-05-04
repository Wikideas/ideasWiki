import mongoose, { Schema, Document } from 'mongoose'

export interface categoryPublication extends Document {
    nameCategory: string
}

const categoryPublicationSchema = new Schema<categoryPublication>({
    nameCategory: {
        type: String,
        required: true
    }
})

const CategoryPublication = mongoose.model<categoryPublication>('categoryPublication', categoryPublicationSchema)
export default CategoryPublication