import urlSchema from './urlSchema';
import dbConnection from '../config/database';
import { IUrl } from '../types';

export default {
    Url: dbConnection.model<IUrl>('Url', urlSchema)
};
