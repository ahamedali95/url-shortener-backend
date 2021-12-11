import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import rootRouter from './resource';
import morganMiddleware from './middleware/morganMiddleware';
import {swaggerMiddleware} from '../openAPI/swaggerMiddleware';

const app = express();
app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerMiddleware));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Express listening on port ' + process.env.PORT || 3000);
});

app.use('/api/v1', rootRouter);


// GET /books 200 status
// POST /books payload 201 status
// GET /books/1 200 status
// PUT/PATCH /books/1 new_payload 201 status
// DELETE /books/1

