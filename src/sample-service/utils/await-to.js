/**
 * Resolve a promise and return [error, result].
 * If promise was resolved -> [null, result].
 * If promise was rejected -> [error, null].
 *
 */
const to = (promise) => {
    if (promise instanceof Promise) return promise.then((value) => [null, value]).catch((error) => [error, null]);
    return [null, null];
};

export { to };