import express, { response, request } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes',classesControllers.index);
routes.post('/classes',classesControllers.create);

routes.get('/connections',connectionsController.index);
routes.post('/connections',connectionsController.create);


export default routes;

//GET: Buscar ou listar uma info
//POST: Criar alguma nova info
//PUT: Atualizar uma info existente
//DELETE: Deletar uma info existente

//Corpo (Request Body): Dados p/ criação ou atualização de um registro => Acessando com request.body
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação