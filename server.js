'use strict'

const app = require('./app')

if(process.env.NODE_ENV === 'production'){
	require('dotenv').config({ path: '.env.production' })
} else {
	require('dotenv').config({ path: '.env.development' })
}

console.log(`STARTING SERVER!!!\n`);

const PORT = process.env.PORT || 8080;

console.log(`server.js ### PORT:\n${JSON.stringify(PORT, null, 2)}`);

// var server = app.listen(PORT, '0.0.0.0', function () {
var server = app.listen(PORT, '192.168.1.1', function () {
	console.log(`App now running on => http://${process.env.DOMAIN}:${PORT}\n`);
});
