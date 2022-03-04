import express from 'express';
import * as UrlService from '../service/urlService';
import BaseResponse from '../response/createBaseResponse';
import {IUrl} from '../types';
import RequiredParamsNotFoundException from '../exception/RequiredParamsNotFoundException';

const urlRouter = express.Router();

urlRouter.post('/shortenUrl', async (req, res): Promise<void> => {
    try {
        if (req.body?.url) {
            const data: IUrl = await UrlService.shortenUrl(req.body.url as string);
            const response = new BaseResponse<IUrl>();
            response.setData(data);

            res.status(200).json(response).end();
        } else {
            throw new RequiredParamsNotFoundException('Url is missing.');
        }
    } catch (e) {
        const response = new BaseResponse();
        response.setError('Unable to shorten url. Please try again later.');
        response.addSystemError((e as Error).message);

        res.status(500).json(response).end();
    }
});

export default urlRouter;

