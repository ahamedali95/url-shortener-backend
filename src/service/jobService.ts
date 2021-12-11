import axios from 'axios';
import {AxiosResponse} from 'axios';
import Endpoint from '../constants/Endpoint';
import JobApiServiceException from '../exception/JobApiServiceException';
import {Job} from '../types';
import logger from '../config/logger';

export const getAllJobs = async (): Promise<Job[]> => {
    try {
        const response: AxiosResponse = await axios.get(Endpoint.ALL_JOBS);
        const data = response.data?.results ?? [];
        logger.debug(`Jobs fetched: ${data.length}`);

        return data;
    } catch (e) {
        logger.error('Unable to fetch jobs:: ', (e as any).message);
        throw new JobApiServiceException((e as any).message);
    }
};

export const findJobTitlesByKeyword = async (keyword: string): Promise<string[]> => {
    try {
        const response: AxiosResponse = await axios.get(Endpoint.ALL_JOBS);
        const data = response.data?.results ?? [];
        const titles = data.map((job: Job) => job.name)
            .filter((name: string) => name.includes(keyword));
        logger.debug(`Titles fetched for '${keyword}': ${titles.length}`);

        return titles;
    } catch (e) {
        logger.error('Unable to fetch job titles:: ', (e as any).message);
        throw new JobApiServiceException((e as any).message);
    }
};

export const findJobsByTitle = async (title: string): Promise<Job[]> => {
    try {
        const response: AxiosResponse = await axios.get(Endpoint.ALL_JOBS);
        const data = response.data?.results ?? [];
        const jobs = data.filter((job: Job) => job.name.includes(title));
        logger.debug(`Jobs fetched for title '${title}': ${jobs.length}`);

        return jobs;
    } catch (e) {
        logger.error('Unable to fetch jobs:: ', (e as any).message);
        throw new JobApiServiceException((e as any).message);
    }
};

export const findJobById = async (id: string): Promise<Job> => {
    try {
        const $id = Number(id);
        const response: AxiosResponse = await axios.get(Endpoint.ALL_JOBS);
        const data = response.data?.results ?? [];
        const job = data.find((job: Job) => job.id === $id);
        logger.debug(`Job fetched for by id '${id}': ${JSON.stringify(job)}`);

        return job;
    } catch (e) {
        logger.error('Unable to fetch job:: ', (e as any).message);
        throw new JobApiServiceException((e as any).message);
    }
};