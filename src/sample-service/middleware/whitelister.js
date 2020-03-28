/**
 * Intention of this middleware is to define any whitelisting for requests.
 * As an example, router whiteLister is defined,
 * If a whitelisted router, variable called 'whiteListedRoute' is set to true.
 * This can be used in other middleware for skipping validation and so on,
 */
import { WHITELISTED_ROUTES } from '../constants';
const routerWhiteLister = (req, res, next) => {
    // Check if this a whitelisted route
    if (WHITELISTED_ROUTES.includes(req.path))
        res.locals.whiteListedRoute = true;
    next();
};

export default routerWhiteLister;