import noteRoutes from './router/noteRoute.js'; 
import userRoutes from './router/userRoute.js';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB connection successful'));

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/notes', noteRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});