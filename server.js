'use strict';

const express = require('express');
const app = express();
const env = process.env.NODE_ENV;

// Constants
const PORT = 8100;
const HOST = '0.0.0.0';

if (env === 'docker') {
  app.use(express.static('static'));
}

if (env === 'dev') {
  app.use(express.static('../'));
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} - environment: ${env}`);