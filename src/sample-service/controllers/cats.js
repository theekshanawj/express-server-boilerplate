/**
 * Controllers/Router relevant to cats defined here.
 * Note: This files named as cats.js to be align with the routes it defines /cats.
 * Follow this pattern if applicable.
 */
import express from 'express';
import validateQueryParam from './router-middlware/cats-middleware';
import getCatInformation from '../services/cats';
import { generateErrorResponse, to } from '../utils';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       schema: object
 *       properties:
 *        message:
 *          type: string
 *          description: Error message
 *        additionalInformation:
 *          type: object
 *          description: Additional information object the error
 */

/**
 * @swagger
 * /cats/facts:
 *   get:
 *     summary: Get information about cats
 *     parameters:
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         required: true
 *         description: Number of facts about cats
 *     responses:
 *       '200':
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       '4xx|5xx':
 *          description: Error responses
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ErrorResponse'
 *
 */
router.get('/facts', validateQueryParam, async (req, res) => {
    const { size } = req.query;
    const [err, result] = await to(getCatInformation(size));
    if (err) {
        return generateErrorResponse(res, err);
    }
    res.send(result);

});

export default router;