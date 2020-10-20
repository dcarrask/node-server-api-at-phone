'use strict';

const express = require('express')
const api = express.Router()

var functions = require('./functions');

const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
  '*'
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
}

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.get('/cors', cors(corsOptions), (req, res, next) => {
  res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
})


api.get('', (req, res) => { res.status(200).send('Welcome to the API') });

api.get('/test', functions.test);

api.get('/time', (req, res) => { res.status(200).send({ date: new Date() }) });

api.get('/dispenser-add/:name/:ssid/:pwd', functions.dispenserAdd);

api.post('/dispenser-add', functions.add);

api.post('/config_wifi', functions.add);

module.exports = api
