const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const serverApp = express();

// Log requests to the console.
serverApp.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
serverApp.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = serverApp;