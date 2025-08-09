import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/auth.js';
import connectDB from './services/mongooseService.js';

const app = express();
app.use(express.json());

dotenv.config();
console.log('URI carregada:', process.env.MONGO_URI); // deve mostrar a URI completa

connectDB();

// Rotas principais
app.use('/api/users', userRoutes);  // /register e /profile
app.use('/api/auth', authRoutes);   // /login


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
