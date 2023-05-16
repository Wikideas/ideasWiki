import mongoose, { Schema, Document } from 'mongoose'

export interface category extends Document {
    nameCategory: string
}

const categorySchema = new Schema<category>({
    nameCategory: {
        type: String,
        required: true
    }
})

const Category = mongoose.model<category>('categoryPublication', categorySchema)
export default Category