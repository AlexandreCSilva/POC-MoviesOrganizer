import { Router } from 'express';
import { deleteMovie, getMovies, getMoviesByGenre, getMoviesByPlataform, postMovie } from '../controllers/movies.controller.js';
import { verifyMovie, verifyMovieById, verifyMovieGenre, verifyMoviePlataform } from '../middlewares/movies.middleware.js';

const moviesRoute = Router();

moviesRoute.post('/movie', verifyMovie, postMovie);
moviesRoute.get('/movies', getMovies);
moviesRoute.get('/movies/genre/', verifyMovieGenre, getMoviesByGenre);
moviesRoute.get('/movies/plataform/', verifyMoviePlataform, getMoviesByPlataform);
moviesRoute.delete('/movie', verifyMovieById, deleteMovie);

export { 
    moviesRoute
};