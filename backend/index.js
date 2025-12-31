// should be first in type: module.
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import noteRoutes from './router/noteRoute.js'; 
import userRoutes from './router/userRoute.js';
import authRoutes from './router/authRoute.js';

mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB connection successful'));

console.log('SECRET_KEY =', process.env.SECRET_KEY);


const app = express();
app.use(express.json());

const PORT = 3000;


app.use('/notes', noteRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});