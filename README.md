# express-server-boilerplate
Skeleton Express Web server application. Boilerplate code is written for you, so you can start coding fast.

- You can use `ES6` syntax 

## Required
- Node
- Yarn

## Reference implementation

Code in this repo has a reference implementation for a web-service to get information about internet's most favourite animal **cat**.
https://alexwohlbruck.github.io/cat-facts/ provides set of APIs to get `facts` about animals, this will be the service consumed by this reference app.

### How to run the app

- Clone/Download this repo and navigate to app root directory through a terminal
- Run `yarn` to download required dependencies
- Run `yarn start`. (You should see `App started at port 5000` in your terminal) <sup>$</sup>
- Application will start on `http://localhost:5000`
- Open your favourite browser and navigate to `http://localhost:5000/api/docs`
- Play with `GET /cats/facts/` API end-point


 <sup>$</sup> `.env` defines `PORT=5000`
 
 ## How to use this boilerplate code
 
 Reference implementation serves as a guide to an implementation of a Express web server via this boilerplate code.
 Follow the guide to get started with implementing a Express app quickly.
 
 - Define controllers/routes in your application in the `controllers` directory
   
   For easy reference name the file which contains router definitions for `someroute` as `someroute.js`
 - Define any route specific middleware in the `controllers/router-middleware` directory and bind them to the routes
 
   For easy reference define the route middleware as `someroute-middleware.js` 
 - In the main app (`src/index.js`) add route definitions using `app.use`
 - Defines application level middleware in the `middleware` directory
 
   Middleware can bound before the controller definitions or after
 - Define service layer implementations in the `services` directory
 - Define downstream service calls, connectors in the `external-apis` directory
 
   A Rest-client has been already implemented using `node-fetch`, customize as required
 - See **Folder structure** below to identify use cases of other directories, all of them are straightforward.
 

Note: Add, delete or modify current implementation to cater for requirements.

## Folder structure

```
app
├── src
│       ├── constants # Directory that contains application-level constants
│       │   ├── index.js # Define application level constants 
│       │   ├── ... # Other constants 

│       ├── controllers # Directory that contains routes/APIs exposed by the web-service
│       │   ├── router-middleware # Directory that contains middleware for routes 
│       │   │   ├── cats-middleware.js # Middleware related to /cats routes
│       │   │   ├── ... # Other route specific middleware
│       │   ├── cats.js # APIs relevant to /cats are defined here
│       │   ├── ... # Other controller definitions


│       ├── external-apis # Directory that contains handlers for all downstream API requests
│       │       ├── client
│       │       │   └── index.js # REST Client class that exposes request to all http methods
│       │       ├── connectors # Directory that contains downstream API connectors/proxy
│       │       │   └── cat-fact.js # API connector for cat-fact service
│       │       │   └── ... # Other API connectors
│       │       └── cat-fact-service.js # Expose APIs of cat-fact service
│       │       └── ... # Expose other downstream APIs


│       ├── middleware # Direcotory that contains application-level middleware 
│       │       ├── request-validator.js # Validate requests 
│       │       ├── ... # Other middleware definitions

│       ├── resources # Directory that contains application resources
│       │       ├── swagger-config.js # Swagger definitions
│       │       ├── ... # Other resources

│       ├── services # Directory that contains service definitions for controllers
│       │       ├── cats.js # Service layer /cats controller
│       │       ├── ... # Other service definitions

│       ├── tests # Directory that contains application tests
│       │       ├── utils 
│       │       │   └── index.tests.js # tests for utils
│       │       ├── validators 
│       │       │   └── index.tests.js # tests for validators
│       │       ├── ... # Other directories for tests
│       │       ├── index.tests.js # Main app tests

│       ├── utils # Directory that contains application-level utilities 
│       │       ├── await-to.js # promise resolver
│       │       ├── ... # Other utils

│       ├── validator # Directory that contains application-level validations
│       │       ├── request-header.js # Request header validator 
│       │       ├── ... # Other validator 

│       ├── index.js # Main app

├── bootstrap # Directory that contains bootstrap scripts to start the application depending on the NODE_ENV

├── .env # Application ENVs for development

├── ... # Other configs such as .babelrc, jest.config.js, ... etc

├── package.json # Dependencies 

```

## Scripts in package.json
- `yarn`: Download dependencies
- `yarn start`: Start the App in development mode. `nodemon` is integrated
- `yarn build`: Build the App; generate a `dist` folder with built code
- `yarn prod:start`: Start the App in production mode, `yarn build` is a prerequisite for this
- `yarn clean`: Remove the `dist` folder
- `yarn test`: Run tests


## TODO

- Unit tests
- Deployment scripts
