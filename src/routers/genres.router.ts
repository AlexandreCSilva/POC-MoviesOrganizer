import { Router } from 'express';
import { postGenre } from '../controllers/genres.controller.js';
import { verifyGenre } from '../middlewares/genres.middleware.js';

const genreRoute = Router();

genreRoute.post('/genre', verifyGenre, postGenre);

export { 
    genreRoute
};