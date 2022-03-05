import urlController from './urlController';
import express from 'express';
import healthCheckRouter from './healthCheckController';

const rootRouter = express.Router();
rootRouter.use('/', urlController);
rootRouter.use('/', healthCheckRouter);

export default rootRouter;