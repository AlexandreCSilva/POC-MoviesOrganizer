import { Router } from 'express';
import { deleteMovie, getMovies, getMoviesByGenre, getMoviesByPlataform, postMovie, updateMovieController } from '../controllers/movies.controller.js';
import { verifyMovie, verifyMovieById, verifyMovieGenre, verifyMoviePlataform, verifyMovieReview } from '../middlewares/movies.middleware.js';

const moviesRoute = Router();

moviesRoute.post('/movie', verifyMovie, postMovie);
moviesRoute.get('/movies', getMovies);
moviesRoute.get('/movies/genre/', verifyMovieGenre, getMoviesByGenre);
moviesRoute.get('/movies/plataform/', verifyMoviePlataform, getMoviesByPlataform);
moviesRoute.delete('/movie', verifyMovieById, deleteMovie);
moviesRoute.patch('/movie', verifyMovieById, verifyMovieReview, updateMovieController);

export { 
    moviesRoute
};