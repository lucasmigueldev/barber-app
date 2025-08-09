import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Senha deve ter pelo menos 6 caracteres" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "E-mail já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Usuário criado com sucesso" });

  } catch (err) {
    console.error(err);
    console.log("Erro ao criar usuário:", err.message);
    res.status(500).json({ error: "Erro interno" });
  }
});

export default router;
