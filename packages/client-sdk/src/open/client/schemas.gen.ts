// This file is auto-generated by @hey-api/openapi-ts

export const $error_BAD_REQUEST = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            description: 'The error message',
            example: 'Invalid input data'
        },
        code: {
            type: 'string',
            description: 'The error code',
            example: 'BAD_REQUEST'
        },
        issues: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                },
                required: ['message']
            },
            description: 'An array of issues that were responsible for the error',
            example: []
        }
    },
    required: ['message', 'code'],
    title: 'Invalid input data error (400)',
    description: 'The error information',
    example: {
        code: 'BAD_REQUEST',
        message: 'Invalid input data',
        issues: []
    }
} as const;

export const $error_UNAUTHORIZED = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            description: 'The error message',
            example: 'Authorization not provided'
        },
        code: {
            type: 'string',
            description: 'The error code',
            example: 'UNAUTHORIZED'
        },
        issues: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                },
                required: ['message']
            },
            description: 'An array of issues that were responsible for the error',
            example: []
        }
    },
    required: ['message', 'code'],
    title: 'Authorization not provided error (401)',
    description: 'The error information',
    example: {
        code: 'UNAUTHORIZED',
        message: 'Authorization not provided',
        issues: []
    }
} as const;

export const $error_FORBIDDEN = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            description: 'The error message',
            example: 'Insufficient access'
        },
        code: {
            type: 'string',
            description: 'The error code',
            example: 'FORBIDDEN'
        },
        issues: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                },
                required: ['message']
            },
            description: 'An array of issues that were responsible for the error',
            example: []
        }
    },
    required: ['message', 'code'],
    title: 'Insufficient access error (403)',
    description: 'The error information',
    example: {
        code: 'FORBIDDEN',
        message: 'Insufficient access',
        issues: []
    }
} as const;

export const $error_INTERNAL_SERVER_ERROR = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            description: 'The error message',
            example: 'Internal server error'
        },
        code: {
            type: 'string',
            description: 'The error code',
            example: 'INTERNAL_SERVER_ERROR'
        },
        issues: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                },
                required: ['message']
            },
            description: 'An array of issues that were responsible for the error',
            example: []
        }
    },
    required: ['message', 'code'],
    title: 'Internal server error error (500)',
    description: 'The error information',
    example: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
        issues: []
    }
} as const;

export const $error_NOT_FOUND = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            description: 'The error message',
            example: 'Not found'
        },
        code: {
            type: 'string',
            description: 'The error code',
            example: 'NOT_FOUND'
        },
        issues: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                },
                required: ['message']
            },
            description: 'An array of issues that were responsible for the error',
            example: []
        }
    },
    required: ['message', 'code'],
    title: 'Not found error (404)',
    description: 'The error information',
    example: {
        code: 'NOT_FOUND',
        message: 'Not found',
        issues: []
    }
} as const;