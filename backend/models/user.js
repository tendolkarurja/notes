import mongoose, { mongo } from "mongoose";

const User = new mongoose.Schema (
    {
        name:{
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            select: false
        }
    },

    {
        timestamps: true
    }
);

const user = mongoose.model('user', User);
export default user;