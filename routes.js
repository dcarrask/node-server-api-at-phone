'use strict';

const express = require('express')
const api = express.Router()

var functions = require('./functions');

api.get('/test', functions.test);

module.exports = api
