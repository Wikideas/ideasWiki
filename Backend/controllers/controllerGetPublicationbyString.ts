import { Request, Response } from 'express';
import Publication from "../models/publication";

export const getPublicationByString = (req: Request, res: Response) => {
    const { string } = req.params
    interface TopicDoc {
        Topic: String,
        NumDoc: String
    }
    const docNumTopic: Array<TopicDoc> = []
    Publication.find({ Topic: { $regex: `^${string}`, $options: 'i' } })
        .then(docs => {
            docs.map(doc => docNumTopic.push({ Topic: doc.Topic, NumDoc: doc.num_Publication }))
            if (docNumTopic.length === 0) {
                res.json(docNumTopic)
            } else {
                res.json(docNumTopic)
            }
        })
        .catch(err => console.log(err))
}