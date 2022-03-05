import { v4 as uuid } from 'uuid';

import UrlServiceException from '../exception/UrlServiceException';
import logger from '../config/logger';
import Model from '../model';
import {IUrl} from '../types';

export const shortenUrl = async (url: string): Promise<IUrl> => {
    try {
        const id = uuid().split('-')[0];
        const urlObj = new Model.Url({
            _id: id,
            longUrl: url,
            shortUrl: `https://sholy.herokuapp.com/${id}`
        });
        await urlObj.save();

        logger.info(`Shortened url with ${id} was successfully generated and saved`);

        return urlObj;
    } catch (e) {
        logger.error('Unable to generate shortened url:: ', (e as any).message);
        throw new UrlServiceException((e as any).message);
    }
};

export const findUrlById = async (id: string): Promise<IUrl | null> => {
    try {
        return await Model.Url.findById(id);
    } catch (e) {
        logger.error('Unable to find the url object for the id supplied:: ', (e as any).message);
        throw new UrlServiceException((e as any).message);
    }
};