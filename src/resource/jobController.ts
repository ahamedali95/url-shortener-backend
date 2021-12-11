import express from 'express';
import * as JobService from '../service/jobService';
import BaseResponse from '../response/createBaseResponse';
import {Job} from '../types';

const jobRouter = express.Router();

// const middleware = (req: any) => {
//     console.log(req);
// };

jobRouter.get('/', async (req, res) => {
    try {
        const data: Job[] = await JobService.getAllJobs();
        const response = new BaseResponse<Job[]>();
        response.setData(data);

        res.status(200).json(response).end();
    } catch (e) {
        const response = new BaseResponse();
        response.setError('Unable to fetch jobs. Please try again later.');
        response.addSystemError((e as any).message);

        res.status(500).json(response).end();
    }
});

jobRouter.get('/keyword_typeahead', async (req, res, next) => {
    try {
        const data: string[] = await JobService.findJobTitlesByKeyword(req.query.keyword as string);
        const response = new BaseResponse<string[]>();
        response.setData(data);

        res.status(200).json(response).end();
    } catch (e) {
        const response = new BaseResponse();
        response.setError('Search failed. Please try again later.');
        response.addSystemError((e as any).message);

        res.status(500).json(response).end();
    }
});

jobRouter.get('/search', async (req, res, next) => {
    try {
        const data: Job[] = await JobService.findJobsByTitle(req.query.keyword as string);
        const response = new BaseResponse<Job[]>();
        response.setData(data);

        res.status(200).json(response).end();
    } catch (e) {
        const response = new BaseResponse();
        response.setError('Search failed. Please try again later.');
        response.addSystemError((e as any).message);

        res.status(500).json(response).end();
    }
});

jobRouter.get('/:id', async (req, res, next) => {
    try {
        const data: Job = await JobService.findJobById(req.params.id as string);
        const response = new BaseResponse<Job>();
        response.setData(data);

        res.status(200).json(response).end();
    } catch (e) {
        const response = new BaseResponse();
        response.setError('Search failed. Please try again later.');
        response.addSystemError((e as any).message);

        res.status(500).json(response).end();
    }
});

export default jobRouter;

