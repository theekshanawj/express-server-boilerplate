/**
 * Application level constants.
 * Feel free to add new file in this directory.
 * Export those files similar to 'error-message' export below.
 * This will allow unified access to constants by ex: import { ALL_ROUTES } from '../constants/'
 */

export * from './error-messages';

export const ALL_ROUTES = '*';
export const DEFAULT_API_TIMEOUT = 10000;
export const DEFAULT_APP_PORT = 3000;
export const WHITELISTED_ROUTES = ['/health'];
export const SWAGGER_URL = '/api/docs';