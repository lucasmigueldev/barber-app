import express from 'express';
import dotenv from 'dotenv';
import createUserRoutes from './src/routes/createuser.js';
import connectDB from './src/services/moongoseService.js';

const app = express();
app.use(express.json());

dotenv.config();
console.log('URI carregada:', process.env.MONGO_URI); // deve mostrar a URI completa

connectDB();

app.use('/Users', createUserRoutes );



const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
