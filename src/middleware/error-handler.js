/**
 * This is the standard error handler middleware as described in https://expressjs.com/en/guide/error-handling.html.
 */
import { AppError, internalServerError } from '../utils';
import { errorMessages } from '../constants';

// Error handler for middleware related error scenarios
const errorHandler = (err, req, res, next) => {
    let error = err;
    if (!(err instanceof AppError)) {
        // Default error message
        error = internalServerError(err.message || errorMessages.INTERNAL_SERVER_ERROR, err.name || '');
    }
    return res.status(error.getHttpStatusCode()).json(error.getErrorBody());
};

export default errorHandler;