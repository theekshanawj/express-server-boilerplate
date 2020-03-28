// Bootstrap the application depending on the NODE_ENV
const env = process.env.NODE_ENV;
const bootstrap = `./${env}`;
// Load the required env specific bootstrap file
require(bootstrap);