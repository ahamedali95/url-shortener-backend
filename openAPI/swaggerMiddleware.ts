import {getJobs} from "./jobs";

export const swaggerMiddleware = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'your description here',
        termsOfService: '',
        contact: {
            name: 'Ahamed Abbas',
        },
        license: {
        }
    },
    paths: {
        "/api/v1/jobs": {
            "get": getJobs
        }
    }
};