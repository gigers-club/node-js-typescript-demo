import { Router } from 'express';
import testeController from './app/controllers/teste.controller';

const routes = Router();

routes.get('/', testeController.get);

export default routes;