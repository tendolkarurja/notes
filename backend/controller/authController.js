import User from "../models/user.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userLogin = async(req, res) => {
    const key = process.env.SECRET_KEY;

    if(!key){
        throw new Error({message:Error.message});
    }
    try{
        const {email, password} = req.body;
        const account = await User.findOne({email}).select('+password');

        if (!account){
            res.status(404).json({'message':'No such user found'});
        }

        console.log('Hash: ', account.password);
        
        const match = await bcrypt.compare(password, account.password);
        if(!match){
            res.status(401).json({'message':'Authentication failed'});

        }

        const token = jwt.sign({
            userId: account._id,
            email: account.email,
        }, key, {expiresIn: '1h'});


        res.status(200).json({ token, userId: account._id });
    }

    catch(error){
        res.status(400).json({'error': error.message})
    }
}

export const userRegister = async(req, res) => {
    try{
        const {name, email, password} = req.body;
        const hashedPass = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPass });
        await user.save();
        res.status(201).json({ message: 'Registration successful' });
    }
    catch (error)
    {
        res.status(500).json({ error: error.message });
    }
}
