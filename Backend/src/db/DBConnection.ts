import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
mongoose.set('strictQuery', true)

export class DBConnection {
    URI: string
    private static instance: DBConnection;
    private connection?: mongoose.Connection;

    private constructor(URI: string) {
        this.URI = URI
    }

    static getInstance(URI: string): DBConnection {
        if (!DBConnection.instance) {
            DBConnection.instance = new DBConnection(URI);
        }
        return DBConnection.instance;
    }

    async connect(): Promise<void> {
        await mongoose.connect(this.URI);
    }

    async getConnection(): Promise<mongoose.Connection> {
        this.connect()
        this.connection = mongoose.connection
        mongoose.connection.once('open', () => {
            console.log('Database connection established successfully!');
        });
        mongoose.connection.on('error', (error) => {
            console.error(`Error while connecting to databse: ${error}`);
        });
        console.log(this.connection.readyState)
        return this.connection!;
    }
}