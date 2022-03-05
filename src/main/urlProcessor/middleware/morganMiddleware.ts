import morgan, { StreamOptions } from 'morgan';

import Logger from '../config/logger';
import {Request} from 'express';

const stream: StreamOptions = {
    write: (message) => Logger.http(message),
};

const skip = () => {
    const env = process.env.NODE_ENV || 'dev';
    return env !== 'dev';
};

morgan.token('requestId', (req: Request): string => req.id);

const morganMiddleware = morgan(
    ':method :url :status :requestId :response-time ms',
    { stream, skip }
);

export default morganMiddleware;