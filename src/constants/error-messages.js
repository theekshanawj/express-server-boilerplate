/**
 * Error messages for error response
 * @type {{INTERNAL_SERVER_ERROR: string, REQUEST_TIMEOUT: string, RESOURCE_NOT_FOUND: string, INVALID_PARAMS: string}}
 */
const errorMessages = {
    INVALID_PARAMS: 'Invalid request parameters',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    RESOURCE_NOT_FOUND: 'Resource not found',
    REQUEST_TIMEOUT: 'Request timeout',
};

export { errorMessages };