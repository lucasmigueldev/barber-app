import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../models/User.js';
import { JWT_SECRET } from '../config.js';


const router = express.Router();



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Verifique se o e-mail e a senha foram fornecidos
  if (!email || !password) {
    return res.status(400).json({ message: "E-mail e senha são obrigatórios" });
  }

  try {

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
    console.log("JWT_SECRET:", JWT_SECRET);


    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });


  } catch (err) {
    console.error("Erro ao fazer login:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
  

});

export default router;
