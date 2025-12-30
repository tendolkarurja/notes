import User from "../models/user.js";

export const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({'message': 'User Created', user});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export const viewUsers = async (req, res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try{
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser){
            res.status(404).json({error: 'User not found'});
        }
        else{
            res.status(200).json({message:'User deleted successfully'});
        }
    }

    catch(error){
        res.status(400).json({error: error.message});
    }
}
