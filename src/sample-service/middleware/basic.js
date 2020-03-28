/**
 * Define basic middleware in your application.
 * A simple logger is defined for you.
 *
 * Define your middleware as you intend. Try to keep them modular.
 * Keep similar middleware together
 */
const logging = (req, res, next) => {
  console.log('A request received for', req.method, req.path);
  next();
};


export default { logging };