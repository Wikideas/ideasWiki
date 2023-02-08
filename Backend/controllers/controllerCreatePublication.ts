import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI: any = process.env.MONGODB_URI || 5001

import { Request, Response } from 'express'
import Publication from "../models/publication";

export const createPublication = (req: Request, res: Response) => {
    console.log('Insertando en collección')
    console.log(req.body)
    const { id_Publication, Topic, Category, Detail, Comment } = req.body
    const Post = new Publication({
        id_Publication: id_Publication,
        Topic: Topic,
        Category: Category,
        Detail: Detail,
        Comment: Comment
    })
    console.log("Procesando Post ...", Post)
    Post.save((error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Publication saved successfully!');
        }
    })
    res.status(200).json({
        ok: "Publicación creada"
    })
}