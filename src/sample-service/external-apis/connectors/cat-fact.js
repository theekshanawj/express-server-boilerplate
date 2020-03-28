/**
 * Connectors are proxy for required APIs.
 * Defined separate files to define the connectors for your intended APIs.
 *
 * This is a Connect method for the https://cat-fact.herokuapp.com/
 * Nothing big to configure for this.
 *
 */
import APIClient from '../client';

const mandatoryHeaders = {
    'content-type': 'application/json',
};

const mandatoryOptions = {
    headers: mandatoryHeaders,
};
// Return an Client for specific to cat-fact API
export default new APIClient(mandatoryOptions);
