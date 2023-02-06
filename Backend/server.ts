import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import * as mongoose from 'mongoose';
import { DBConnection } from './db/DBConnection';

//Mongoose config
mongoose.set('strictQuery', true)

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors());

async function inicio() : Promise <void> {
    const conn  = DBConnection.getInstance('mongodb+srv://TecnoWiki:DIsX6HLpIGpTQyhZ@cluster1.wyu3uqy.mongodb.net/?retryWrites=true&w=majority')
    const db = await conn.getConnection()
}

try {
    inicio()    
} catch (error) {
    console.log(error)
}

app.get( "/", ( req : Request , res : Response ) => {
   res.status(200).json({
      ok : "server corriendo"
   })
})

app.listen(port, void console.log('server run on port: ', port));