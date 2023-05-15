import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

export class dbConnection {
    URI: string;
    private static instance: dbConnection;
    private connection?: mongoose.Connection;

    private constructor(URI: string) {
        this.URI = URI;
    }

    static getInstance(URI: string): dbConnection {
        if (!dbConnection.instance) {
            dbConnection.instance = new dbConnection(URI);
        }
        return dbConnection.instance;
    }

    async connect(): Promise<void> {
        await mongoose.connect(this.URI);
    }

    async getConnection(): Promise<mongoose.Connection> {
        this.connect();
        this.connection = mongoose.connection;
        mongoose.connection.once('open', () => {
            console.log('Database connection established successfully!');
        });
        mongoose.connection.on('error', (error) => {
            console.error(`Error while connecting to databse: ${error}`);
        });
        return this.connection!;
    }
}