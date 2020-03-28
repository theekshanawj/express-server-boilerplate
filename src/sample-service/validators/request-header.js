/**
 * A simple header validator
 * Validate if the request header has user-agent defined
 * Add validation as required and expand this/ add new files as required
 */
const headerValidator = (headers) => {
    const userAgent = headers['user-agent'];
    return !!userAgent && typeof userAgent === 'string';
};

export { headerValidator };