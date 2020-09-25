require('dotenv/config');

const express = require('express');

const routes = require('./routes');

const port = process.env.NODE_PORT || 3333;

const app = express();
const bodyParser = require('body-parser')

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi    = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Properties API information',
      description: "This is an implementation of a documention for Properties API's using SWAGGER",
      servers: [`http://localhost:${port}`],
    }
  },
  apis: ['./src/routes/*.js']
}

require('./database');

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.use(routes);

module.exports = app;
