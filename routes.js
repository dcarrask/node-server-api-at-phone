'use strict';

const express = require('express')
const api = express.Router()

var functions = require('./functions');

api.get('/test', functions.test);

api.get('/dispenser-add/:name/:ssid/:pwd', functions.dispenserAdd);

module.exports = api
