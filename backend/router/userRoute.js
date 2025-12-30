import express from "express";
const router = express.Router();
import { createUser, viewUsers, deleteUser } from "../controller/userController.js";

router.post('/', createUser);
router.get('/', viewUsers);
router.delete('/:id', deleteUser);

export default router;

