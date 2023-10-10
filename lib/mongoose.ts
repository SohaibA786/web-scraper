import mongoose from 'mongoose';

let isConnected = false;



export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URI) return console.log('No MongoDB URI defined');

    if (isConnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URI,
            {
                dbName: "amazon-price-tracker",
            });

        isConnected = true;

        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
    }
}