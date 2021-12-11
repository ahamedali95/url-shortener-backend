export const getJobs = {
    tags: ['Jobs'],
    description: "Returns all jobs in the system",
    operationId: 'getJobs',
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        "200": {
            description: "A list of jobs.",
            content: {
                "application/json": {
                    schema: {
                        type: "array"
                    }
                }
            }
        }
    }
};