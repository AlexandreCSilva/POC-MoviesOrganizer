import express from 'express';
import * as dotenv from 'dotenv';
import { moviesRoute } from '../src/routers/movies.router.js';
import { genreRoute } from './routers/genres.router.js';
import { plataformRoute } from './routers/plataform.router.js';

dotenv.config();

const app = express();

app.use(
    express.json(),
    moviesRoute,
    genreRoute,
    plataformRoute
);

app.listen(process.env.PORT, () => console.log(`App running on port: ${process.env.PORT}`));