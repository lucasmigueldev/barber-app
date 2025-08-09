import express from 'express';
import dotenv from 'dotenv';
import createUserRoutes from './routes/createuser.js';
import authRoutes from './routes/auth.js';
import connectDB from './services/moongoseService.js';

const app = express();
app.use(express.json());

dotenv.config();
console.log('URI carregada:', process.env.MONGO_URI); // deve mostrar a URI completa

connectDB();

app.use('/Users', createUserRoutes ); // Rota para criação de usuários
app.use('/auth', authRoutes); // Rota para autenticação

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
