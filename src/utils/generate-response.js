/**
 * Response generator util methods.
 * Only error generator is defined here, expand this as applicable.
 */
import { AppError, internalServerError } from './errors';
import { errorMessages } from "../constants";

const generateErrorResponse = (response, err) => {
    let error = err;
    if (!(err instanceof AppError)) {
        // Default error message
        error = internalServerError(err.name || errorMessages.INTERNAL_SERVER_ERROR, err.name || '');
    }
    return response.status(error.getHttpStatusCode()).json(error.getErrorBody());
};


export { generateErrorResponse };