import urlController from './urlController';
import express from 'express';

const rootRouter = express.Router();
rootRouter.use('/', urlController);

export default rootRouter;