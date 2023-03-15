import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI: any = process.env.MONGODB_URI || 5001

import { Request, Response } from 'express'
import { numb } from '../utils/countDocs';
import { insert } from '../utils/insertDoc';

export const createPublication = (req: Request, res: Response) => {

    console.log('Inserting collection')
    const { Topic, Date_Publication, Date_Ultime_Edit, Category, Detail } = req.body
    async function runTasks() {
        const numDocs = await numb()
        try {
            await insert(res, numDocs, Topic, Date_Publication, Date_Ultime_Edit, Category, Detail)
        } catch (error) {
            console.log(error)
        }
    }
    runTasks()
}