import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './user.routes';
import sessionsRouter from './session.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
export default routes;
