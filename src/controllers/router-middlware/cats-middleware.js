/**
 * Middleware related to /cats route is defined here.
 */
import { invalidRequestError } from '../../utils';
import { errorMessages } from '../../constants';

// Validate size in query param
const validateQueryParam = (req, res, next) => {
    const { size } = req.query;
    const intSize = parseInt(size, 10);
    if (!Number.isInteger(intSize) || intSize < 0) return next(invalidRequestError(errorMessages.INVALID_PARAMS, 'Invalid size'));
    next();
};

export default validateQueryParam;