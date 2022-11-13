import { Router } from 'express';
import { getMovies, getMoviesByGenre, postMovie } from '../controllers/movies.controller.js';
import { verifyMovie, verifyMovieGenre } from '../middlewares/movies.middleware.js';

const moviesRoute = Router();

moviesRoute.post('/movie', verifyMovie, postMovie);
moviesRoute.get('/movies', getMovies);
moviesRoute.get('/movies/genre/', verifyMovieGenre, getMoviesByGenre);

export { 
    moviesRoute
};