export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: "Shorten URL App's APIs Document",
        description: 'Found provided APIs below',
        termsOfService: '',
        contact: {
            name: 'Ahamed Abbas',
        },
        license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html"
        }
    },
    host: "localhost:8000",
    basePath: "",
    "tags": [
        {
            "name": "Url",
            "description": "API for processing urls"
        }
    ],
    "schemes": ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    "paths": {
        "/api/v1/shortenUrl": {
            "post": {
                "tags": ["Url"],
                "summary": "Convert long url provided by the user to a shorter one",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "url": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": '#/components/schemas/Url'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Url": {
                "type": "object",
                "required": ["_id"],
                "properties": {
                    "_id": {
                        "type": "string",
                        "uniqueItems": true,
                        "example": "h4562"
                    },
                    "shortUrl": {
                        "type": "string",
                        "example": "http://localhost:8080/63c5545d"
                    },
                    "longUrl": {
                        "type": "string",
                        "example": "https://www.youtube.com/channel/UCkekN0qfOCsT91N_-liHTPw/videos"
                    }
                }
            }
        }
    }
};