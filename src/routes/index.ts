import { Router } from 'express';
import appointmentsRouter from './appomintments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
