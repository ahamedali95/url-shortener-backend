import './setup';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import addRequestId from 'express-request-id';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import './config/database';

import rootRouter from './resource';
import urlRedirectRouter from './resource/urlRedirectController';
import morganMiddleware from './middleware/morganMiddleware';
import {swaggerDocument} from '../../../openAPI/swaggerDocument';
import './model/index';
import dbConnection from './config/database';
import logger from './config/logger';

const app = express();
app.use(addRequestId());
app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.set('port', process.env.PORT || 8080);

dbConnection.on('open', async () => logger.info('DB connection is successful'));
dbConnection.on('error', () => logger.error('DB connection has failed'));

app.listen(app.get('port'), () => logger.info('Express listening on port ' + 8080));

app.use('/api/v1', rootRouter);
app.use('/', urlRedirectRouter);

