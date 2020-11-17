'use strict';

const express = require('express');
const app = express.Router();
const cors = require('cors');
const functions = require('./functions');

app.get('', (req, res) => { res.status(200).send('Welcome to the eurheka-dispenser app') });
app.get('/time', functions.getTime);
// app.post('/config_wifi', functions.configDispenser);
app.post('/setup', functions.configDispenser);

app.use(cors);

module.exports = app
