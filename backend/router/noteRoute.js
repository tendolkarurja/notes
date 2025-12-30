import mongoose from "mongoose";
import express from "express";
const router = express.Router();

import { createNote, viewActiveNotes, viewNotes, viewPinnedNotes, deleteNote, updateNote} from "../controller/noteController.js";

router.post('/', createNote);
router.get('/:id', viewNotes);
router.get('/:id/pinned', viewPinnedNotes);
router.get('/:id/status/active', viewActiveNotes);
router.delete('/:id', deleteNote);
router.patch('/:userId/:noteId', updateNote);
export default router