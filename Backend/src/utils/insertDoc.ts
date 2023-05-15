import { Response } from 'express';
import Publication from '../models/publication.model';

export const insert = async (
    res: Response,
    i: any,
    Topic: String,
    Date_Publication: Date,
    Date_Ultime_Edit: Date,
    Category: String,
    Detail: String
) => {
    Publication.findOne({ Topic: Topic })
        .then(data => {
            if (data) {
                console.log('No se pudo insertar la colección porque el tópico ya existe')
                return res.json({ err: 'El tópico que está intentando agregar ya existe' })
            } else {
                const Post = new Publication({
                    num_Publication: i,
                    Topic: Topic,
                    Date_Publication: Date_Publication,
                    Date_Ultime_Edit: Date_Ultime_Edit,
                    Category: Category,
                    Detail: Detail
                })
                Post.save((error) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log('Publication saved successfully!');
                        res.status(201).json({
                            ok: 'Publication saved successfully!'
                        })
                    }
                })
            }
        }).catch(err => console.log(err))
}