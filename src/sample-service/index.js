/**
 * The Express App.
 */
import express from 'express';
import { initialBindings, finalBindings } from './middleware';
import { DEFAULT_APP_PORT } from './constants';

/**
 * Import controllers. This is as required by your application
 * TODO: This has to be done manually.
 */
import rootControllers from './controllers';
import exportControllers from './controllers/cats';

const app = express();

const PORT = process.env.PORT || DEFAULT_APP_PORT;

/**
 * Middleware that need to be called before request hits the relevant controllers
 */
initialBindings(app);


/**
 * Map controllers to specific route.
 * TODO: This has to be manually.
 */
app.use('/', rootControllers);
app.use('/cats', exportControllers);

/**
 * Fallback middleware such as error-middleware, 404 cases, etc
 */

finalBindings(app);

app.listen(PORT, () => {
   console.log('App started at port', PORT);
});
