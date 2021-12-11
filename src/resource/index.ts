import jobController from './jobController';
import express from 'express';

const rootRouter = express.Router();
rootRouter.use('/jobs', jobController);

export default rootRouter;

