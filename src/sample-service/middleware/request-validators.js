/**
 * Request validator middleware. Expand this as required.
 */
import { invalidRequestError } from '../utils';
import { errorMessages } from '../constants';
import { headerValidator  } from '../validators';

const reqHeaderValidators = (req, res, next) => {
    const { whiteListedRoute } = res.locals;
    // If a whitelisted route, skip validations.
    if (whiteListedRoute) return next();
    const { headers } = req;
    if (headerValidator(headers)) return next();
    next(invalidRequestError(errorMessages.INVALID_PARAMS, 'Invalid header params'));
};

export default reqHeaderValidators;