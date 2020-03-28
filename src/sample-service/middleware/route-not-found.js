/**
 * Given a request does not have a controller to execute, this middleware will generate an error.
 */
import { notFoundError} from '../utils/errors';
import { errorMessages } from '../constants'

const routeNotFound = (req, res, next) => {
  const baseUrl = req.originalUrl;
  const method = req.method;
  next(notFoundError(errorMessages.RESOURCE_NOT_FOUND, `${method} ${baseUrl} is not defined`));
};

export default routeNotFound;