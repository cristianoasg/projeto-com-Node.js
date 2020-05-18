import { Router } from 'express';
import appointmentsRouters from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouters);

export default routes;
