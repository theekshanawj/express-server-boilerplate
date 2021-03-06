/**
 * This method will expose API end-points to cat-fact API.
 * To call some other API, define a connector first,
 * Then define relevant methods to expose API methods, in a separate file.
 */
import { stringify } from 'qs';

import shopConnector from './connectors/cat-fact';
import { to, generateCatFacts } from '../utils/';

const CAT_FACT_URL = process.env.CAT_FACT_URL;
const CAT_TYPE = 'cat';

const getCatFacts = async (size) => {
    const baseURI = '/facts/random';
    const query = {
      animal_type: CAT_TYPE,
      amount: size,
    };
    const [err, result] = await to(shopConnector.get(`${CAT_FACT_URL}${baseURI}?${stringify(query)}`));
    if(err) {
        return Promise.reject(err);
    }
    return generateCatFacts(result);
};

export { getCatFacts };