/**
 * Swagger Definitions: Expand them as required.
 */
import swaggerJSDocs from 'swagger-jsdoc';
import packageJson from '../../package';

const swaggerDocs = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: packageJson.name.toUpperCase(),
            version: packageJson.version,
            description:
                "API specifications of the Sample service",
            contact: {
                name: "",
                url: "",
                email: ""
            }
        },
    },
    apis: [`${__dirname}/../controllers/*.js`]
};

export default swaggerJSDocs(swaggerDocs);