import express from "express";
import { createUser, getProfile } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", createUser); // rota de criação
router.get("/profile", authMiddleware, getProfile); // rota protegida

export default router;
