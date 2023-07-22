import mongoose, { Schema, Document } from 'mongoose'

export interface ICategory extends Document {
    categoryId: string
    nameCategory: string
    shipImage: string
    bannerImage: string
    active: boolean
}

const categorySchema = new Schema<ICategory>({
    categoryId: {
        type: String,
        unique: true
    },
    nameCategory: {
        type: String,
        required: true
    },
    shipImage: {
        type: String
    },
    bannerImage: {
        type: String
    },
    active: {
        type: Boolean
    }
})

const Category = mongoose.model<ICategory>('categoryPublication', categorySchema);
export default Category;