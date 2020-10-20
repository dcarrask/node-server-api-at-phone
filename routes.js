'use strict';

const express = require('express')
const api = express.Router()

var functions = require('./functions');

api.get('', (req, res) => { res.status(200).send('Welcome to the API') });

api.get('/test', functions.test);

api.get('/dispenser-add/:name/:ssid/:pwd', functions.dispenserAdd);

api.post('/dispenser-add', functions.add);

api.post('/config_wifi', functions.add);

module.exports = api
