import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from 'mongoose';

import { dbConnection } from './src/db/dbConnection';
import publicationsRouter from './src/routes/publications.routes';
import sectionsRouter from './src/routes/sections.routes';
import categoriesRouter from './src/routes/categories.routes';
import homeRouter from './src/routes/home.routes';

//Mongoose config
mongoose.set('strictQuery', true);

export const app = express();
const root: string = '/api-wiki-ideas/';
const MONGODB_URI: any = process.env.MONGODB_URI || 5000;

//Middlewares
app.use(cors());
app.use(bodyParser.json());

async function runConnection(): Promise<mongoose.Connection> {
    const conn = dbConnection.getInstance(MONGODB_URI);
    const db = await conn.getConnection();
    return db;
}
try {
    const resultConnection = runConnection();
    function delayedLogStatusConnection() {
        resultConnection.then(data => console.log('Conexion status:', data.readyState));
    }
    setTimeout(delayedLogStatusConnection, 6000);
} catch (error) {
    throw new Error('An error ocured when the app tried connect with de database');
}
//Routes
app.use(root, publicationsRouter);
app.use(root, sectionsRouter);
app.use(root, categoriesRouter);
app.use(root, homeRouter);