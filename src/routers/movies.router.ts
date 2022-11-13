import { Router } from 'express';
import { getMovies, postMovie } from '../controllers/movies.controller.js';
import { verifyMovie } from '../middlewares/movies.middleware.js';

const moviesRoute = Router();

moviesRoute.post('/movie', verifyMovie, postMovie);
moviesRoute.get('/movies', getMovies);

export { 
    moviesRoute
};