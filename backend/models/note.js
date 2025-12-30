import mongoose, { model, mongo } from "mongoose";

const db = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    cur_status: {
        type: String,
        enum: ['active', 'archived', 'trash']
    },

    tags: {
        type: [String],
        enum: ['important', 'due today', 'due tomorrow', 'due this week', 'due coming week', 'due this month'],
    },

    pinned : {
        type: Boolean, 
        default: false
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    completed: Boolean,

    due: Date
},
{
    timestamps: true
}
);

const Note = mongoose.model('Note', db);
export default Note;