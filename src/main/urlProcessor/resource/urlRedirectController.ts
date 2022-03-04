import express from 'express';
import * as UrlService from '../service/urlService';
import {IUrl} from '../types';

const urlRedirectRouter = express.Router();

urlRedirectRouter.get('/:uniqueId', async (req, res): Promise<void> => {
    try {
        const data: IUrl | null = await UrlService.findUrlById(req.params.uniqueId as string);
        data ? res.redirect(data.longUrl) : res.status(404).send('Not found');
    } catch (e) {
        res.status(500).send((e as Error).message);
    }
});

export default urlRedirectRouter;

