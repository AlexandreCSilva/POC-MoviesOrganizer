import { Router } from 'express';
import { postMovie } from '../controllers/postMovies.controller.js';
import { verifyMovie } from '../middlewares/movies.middleware.js';

const moviesRoute = Router();

moviesRoute.post('/movie', verifyMovie, postMovie);

export { 
    moviesRoute
};