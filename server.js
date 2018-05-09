'use strict';

const express = require('express');
const app = express();
const directory = require('serve-index');
const env = process.env.NODE_ENV;

// Constants
const PORT = 8100;
const HOST = '0.0.0.0';

if (env === 'docker') {
  app.use(directory('static'));
  app.use(express.static('static'));
}

if (env === 'dev') {
  app.use(directory('../'));
  app.use(express.static('../'));
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} - environment: ${env}`);