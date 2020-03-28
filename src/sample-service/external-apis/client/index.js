/**
 * REST-Client Class.
 * Wraps the node-fetch module.
 *
 */
import { internalServerError } from '../../utils';
import { errorMessages } from '../../constants';
import fetch from 'node-fetch';
import { to } from '../../utils';
import { DEFAULT_API_TIMEOUT } from '../../constants';

// Allowed HTTP methods
const HTTP_REQUEST_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

// API client that wrap node-fetch
class APIClient {
    constructor(options = {}) {
        HTTP_REQUEST_METHODS.forEach((method) => {
           this[method.toLowerCase()] = async (url, otherOptions = {}) => {
               const finalOptions = Object.assign({}, { method }, otherOptions, options);
               const [err, res] = await to(this.doFetch(url, finalOptions));
               if (err) {
                   return Promise.reject(err);
               }
               return this.resolveResponse(res);
           }
        });
        // File download as a buffer, unless method is specified inside otherOptions POST will be used
        this.download = async (url, otherOptions = {}) => {
            const method = otherOptions.method || 'POST';
            const finalOptions = Object.assign({}, { method }, otherOptions, options);
            const [err, res] = await to(this.doFetch(url, finalOptions));
            if (err) {
                return Promise.reject(err);
            }
            return res.buffer();

        }
    }
    // Fetch will resolve for non 200 responses, hence correct type is returned through this method
    async resolveResponse(res) {
        const [err, jsonBody] = await to(res.json());
        if(err) {
            return Promise.reject(err);
        }
        // res.ok = res.status >= 200 and res.status < 300
        if(res.ok) {
            // Return success only for 200 response
            return Promise.resolve(jsonBody);
        }
        return Promise.reject(jsonBody);
    }
    // node-fetch API timeout is not implemented
    doFetch(url, options) {
        const timeout = options.timeout || DEFAULT_API_TIMEOUT;
        return Promise.race([
            fetch(url, options),
                new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(internalServerError(errorMessages.REQUEST_TIMEOUT, `Request to ${url} timed out`))
                    }, timeout)
                })
        ])
    }
}

export default APIClient;