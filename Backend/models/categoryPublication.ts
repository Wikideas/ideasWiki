import mongoose, { Schema, Document } from 'mongoose'

export interface categoryPublication extends Document {
    code: string,
    nameCategory: string
}

const categoryPublicationSchema = new Schema<categoryPublication>({
    code: {
        type: String,
        required: true
    },
    nameCategory: {
        type: String,
        required: true
    }
})