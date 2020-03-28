/**
 * Middleware binder.
 *
 */
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { ALL_ROUTES, SWAGGER_URL } from '../constants';

/**
 * Import required middleware.
 */
import basic from './basic';
import headerValidators from './request-validators';
import routeNotFound from './route-not-found';
import errorHandler from './error-handler';
import whiteLister from './whitelister';

//Swagger-UI Docs
import swaggerDocument from '../resources/swagger.config';

// Bind middleware in an individual module
const bindExports = (app, module) => {
    // use the default export as the middleware
    if (typeof module === 'function') {
        app.use(module);
    }
    // Use each exported methods
    if (typeof module === 'object') {
        Object.values(module).forEach((fnc) => {
          app.use(fnc);
        });
    }
};

/**
 * Initial middleware bindings, before controllers are being executed.
 */
const initialBindings = (app) => {
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(SWAGGER_URL, swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  bindExports(app, basic);
  bindExports(app, whiteLister);
  bindExports(app, headerValidators);
};

/**
 * Final middleware bindings. Error handler and undefined route handler.
 */
const finalBindings = (app) => {
    app.use(ALL_ROUTES, routeNotFound); // Handle undefined routes
    bindExports(app, errorHandler);
};

export { initialBindings,  finalBindings };