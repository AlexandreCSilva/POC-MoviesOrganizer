import express, { json } from 'express';
import * as dotenv from 'dotenv';
import { moviesRoute } from '../src/routers/movies.router.js';

dotenv.config();

const app = express();

app.use(
    express.json(),
    moviesRoute
);

app.listen(process.env.PORT, () => console.log(`App running on port: ${process.env.PORT}`));