import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from 'mongoose';

import { DBConnection } from './db/DBConnection';
import router from './routes/RouterPublication';

//Mongoose config
mongoose.set('strictQuery', true)

const app = express();
const root: string = '/'
const port = process.env.PORT || 5000;
const MONGODB_URI: any = process.env.MONGODB_URI || 5001

//Middlewares
app.use(cors());
app.use(bodyParser.json());

async function runConnection(): Promise<mongoose.Connection> {
    const conn = DBConnection.getInstance(MONGODB_URI)
    const db = await conn.getConnection()
    return db
}
try {
    const resultConnection = runConnection()
    function delayedLogStatusConnection() {
        resultConnection.then(data => console.log(data.readyState))
    }
    setTimeout(delayedLogStatusConnection, 7000);
} catch (error) {
    console.log(error)
}
//Rutes
app.use(root, router)

app.listen(port, void console.log('server run on port: ', port));