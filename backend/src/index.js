import express from 'express';
import dotenv from 'dotenv';
import createUserRoutes from './routes/createuser.js';
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import connectDB from './services/mongooseService.js';

const app = express();
app.use(express.json());

dotenv.config();
console.log('URI carregada:', process.env.MONGO_URI); // deve mostrar a URI completa

connectDB();

app.use('/Users', createUserRoutes ); // Rota para criação de usuários
app.use('/auth', authRoutes); // Rota para autenticação
app.use('/profile', profileRoutes); // Rota para perfil de usuário

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
