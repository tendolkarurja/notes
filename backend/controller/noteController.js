import Note from "../models/note.js"
export const viewNotes = async(req, res) =>{
    try{
        const uID = req.params.id;
        const notes = await Note.find({owner:uID});    
        res.json(notes);
    }    

    catch(err){
        res.status(400).json({error: err.message});
        }
}

export const createNote = async(req, res) => {
    try{
        const note = await Note.create(
            req.body
        );

        res.status(201).json({message: 'Note created', note});
    }

    catch(error){
        res.status(400).json({error: error.message});
    }
}

export const deleteNote = async(req, res) => {
    try{
        const noteId = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(noteId);

        if (!deletedNote){
            return res.status(404).json({message:'Note not found'});
        }
        res.status(200).json({message: 'Note deleted successfully'});
    }

    catch(error){
        res.status(400).json({error: error.message});
    }
}

export const viewPinnedNotes = async(req, res) => {
    try{
        const uID = req.params.id;

        const notes = await Note.find({pinned : true, owner : uID});
        res.status(200).json({message: 'Pinned Notes', notes});
    }

    catch(error){
        res.status(400).json({error: error.message});
    }
}

export const viewActiveNotes = async(req, res) => {
    try{
        const uID = req.params.id;

        const notes = await Note.find({cur_status : "active", owner : uID});
        res.status(201).json({message: 'Active Notes', notes});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export const updateNote = async(req,res) => {
    try{
        const uID = req.params.userId;
        const nID = req.params.noteId;
        const updatedContent = req.body;
        const note = await Note.findOneAndUpdate({_id: nID, owner: uID}, {$set : updatedContent},{new: true });

        if (!note){
            res.status(404).json({message: 'Notes not found'})
        }

        res.status(200).json({'message':'Updated note successfully', note});
    }

    catch(error){
        res.status(400).json({'error':error.message});
    }
}