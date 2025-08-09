import express from 'express';
import authMiddlawere from '../middlewares/authMiddlawere.js';

const router = express.Router();

router.get('/', authMiddlawere, (req, res) => {
    res.json({
        message: "Acesso autorizado",
        user: req.user
    });
});

export default router;