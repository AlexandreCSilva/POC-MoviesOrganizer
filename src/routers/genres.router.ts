import { Router } from 'express';
import { postGenre } from '../controllers/postGenre.controller.js';
import { verifyGenre } from '../middlewares/genres.middleware.js';

const genteRoute = Router();

genteRoute.post('/genre', verifyGenre, postGenre);

export { genteRoute };