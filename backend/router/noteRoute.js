import express from "express";
const router = express.Router();

import { createNote, viewActiveNotes, viewNotes, viewPinnedNotes, deleteNote, updateNote} from "../controller/noteController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

router.post('/', authMiddleware, createNote);
router.get('/', authMiddleware, viewNotes);
router.get('/pinned', authMiddleware, viewPinnedNotes);
router.get('/status/active', authMiddleware, viewActiveNotes);
router.delete('/', authMiddleware, deleteNote);
router.patch('/:noteId',authMiddleware, updateNote);
export default router