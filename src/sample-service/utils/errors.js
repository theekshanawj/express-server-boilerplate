/**
 * Application level error utilities.
 * AppError is generic error class.
 * invalidRequestError, notFoundError and internalServerError are objects that responds to 400, 404 and 500 errors.
 */

class AppError extends Error {
    constructor(httpStatusCode, message, additionalInformation) {
        super();
        this.httpStatusCode = httpStatusCode;
        this.message = message;
        this.additionalInformation = additionalInformation;
    }
    getHttpStatusCode () {
        return this.httpStatusCode;
    }
    getErrorBody () {
        const { message, additionalInformation } = this;
        return { error: { message, additionalInformation} };
    }
}

// 400 Error
class InvalidRequestError extends AppError {
    constructor(message, additionalInformation) {
        super(400, message, additionalInformation);
    }
}

// 404 Error
class NotFoundError extends AppError {
    constructor(message, additionalInformation) {
        super(404, message, additionalInformation);
    }
}

// 500 Error
class InternalServerError extends AppError {
    constructor(message, additionalInformation) {
        super(500, message, additionalInformation);
    }
}
// Factory for error
const appError = (httpStatusCode, message, additionalInformation) => new AppError(httpStatusCode, message,additionalInformation);
const invalidRequestError = (message, additionalInformation) => new InvalidRequestError(message, additionalInformation);
const notFoundError = (message, additionalInformation) => new NotFoundError(message, additionalInformation);
const internalServerError = (message, additionalInformation) => new InternalServerError(message, additionalInformation);

export { appError, invalidRequestError, notFoundError, internalServerError, AppError };