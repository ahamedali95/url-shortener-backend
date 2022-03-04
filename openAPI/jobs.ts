export const getJobs = {
    tags: ['Shorten URL'],
    description: "Shorten the provided URL",
    operationId: 'shortenUrl',
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        "200": {
            description: "",
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