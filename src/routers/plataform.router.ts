import { Router } from 'express';
import { postPlataform } from '../controllers/plataforms.controller.js';
import { verifyPlataform } from '../middlewares/plataform.middleware.js';

const plataformRoute = Router();

plataformRoute.post('/plataform', verifyPlataform, postPlataform);

export { 
    plataformRoute
};