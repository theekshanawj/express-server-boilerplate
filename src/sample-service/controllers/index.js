/**
 * Controller/routes relevant to / (root) defined here
 * Note: index.js is intended for / routes (of course you can change by changing main app)
 */

import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *    summary: Used to check whether the app is running
 *    responses:
 *     '200':
 *       description: OK
 *       content:
 *        schema:
 *          type: string
 *
 */
router.get('/health', (req, res) => {
   res.sendStatus(200);
});

export default router;