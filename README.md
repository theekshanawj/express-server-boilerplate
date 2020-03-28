# express-server-boilerplate
Skeleton Express Web server application. Boilerplate code is written for you, so you can start coding fast.


## Folder structure

```
app
├── src
│       ├── constants # Direcotry that contains application-level constants
│       │   ├── index.js # Define application level constants 
│       │   ├── ... # Other constants 

│       ├── controllers # Direcotry that contains routes/APIs exposed by the web-service
│       │   ├── router-middleware # Directory that contains middleware for routes 
│       │   │   ├── cats-middleware.js # Middlewares related to /cats routes
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
│       │       ├── ... # Other middleware defintions

│       ├── resources # Directory that contains application resources
│       │       ├── swagger-config.js # Swagger defintions
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

├── boostrap # Directory that contains boostrap scripts to start the application depending on the NODE_ENV

├── .env # Application ENVs for development

├── ... # Other configs such as .babelrc, jest.config.js, ... etc

├── package.json # Dependencies 

```
