import {to, generateExportSuccessResponse, AppError, internalServerError} from '../../utils';
import {errorMessages} from "../../constants";

describe('utils tests', () => {
   describe('to util test', () => {
       it('should resolve a promise and return  [null, result]', async () => {
           const result = { resolved: true };
           const aPromise = new Promise((resolve => {
              setTimeout(resolve, 500, result);
            }));
           const resolveValue = await to(aPromise);
           expect(resolveValue).toHaveLength(2);
           expect(resolveValue).toEqual([null, result]);

       });
       it('should reject a promise and return  [error, null]', async () => {
           const error = new Error('error');
           const aPromise = new Promise(((_, reject) => {
               setTimeout(reject, 500, error);
           }));
           const resolveValue = await to(aPromise);
           expect(resolveValue).toHaveLength(2);
           expect(resolveValue).toEqual([error, null]);
       });
       it('should return [null, null] to non promise argument to to utility', async () => {
           const resolvedValue = await to('string');
           expect(resolvedValue).toHaveLength(2);
           expect(resolvedValue).toEqual([null, null]);
       });
   });
   describe('generateExportSuccessResponse utils tests', () => {
       it('should call the response.send method ', () => {

           const mockResponse = {
               set: jest.fn(),
               send: jest.fn()
           };
           const buffer = Buffer.from([1, 2]);
           generateExportSuccessResponse(mockResponse, buffer);

           expect(mockResponse.set).toHaveBeenCalledWith('Content-Type', 'application/octet-stream');
           expect(mockResponse.send).toHaveBeenCalledWith(buffer);
       });
       it('should throw an error when response is not defined', () => {
           let err;
           try {
               const buffer = Buffer.from([1, 2]);
               generateExportSuccessResponse(null, buffer);
           } catch (e) {
               err = e;
           }
           expect(err).toBeDefined();
           expect(err instanceof AppError).toBeTruthy();
           expect(err.getHttpStatusCode()).toBe(500);
       });
       it('should throw an error if the buffer if not of type Buffer', () => {
           let err;
           try {
               generateExportSuccessResponse({ set: jest.fn()}, null);
           } catch (e) {
               err = e;
           }
           expect(err).toBeDefined();
           expect(err instanceof AppError).toBeTruthy();
           expect(err.getHttpStatusCode()).toBe(500);
       });
   });

});