import { to } from '../../utils';

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
});