import dotenv from 'dotenv';
dotenv.config();
import * as mongoose from 'mongoose';
mongoose.set('strictQuery', true)

export class DBConnection {
    url : string
    private static instance: DBConnection;
    
    private connection?: mongoose.Connection;

    private constructor(url : string){
        this.url = url
    }

    static getInstance(url: string) : DBConnection {
        if (!DBConnection.instance) {
            DBConnection.instance = new DBConnection(url);
          }
          return DBConnection.instance;
    }

    async connect(): Promise<void> {
        this.connection = await mongoose.createConnection(this.url);
    }
    
    async getConnection(): Promise<mongoose.Connection> {
        if (!this.connection) {
          await this.connect();
          console.log('Obteniendo conexión correctamente')
        }
        return this.connection!;
    } 
}