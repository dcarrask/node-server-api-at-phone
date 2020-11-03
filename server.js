'use strict'

const app = require('./app')

if(process.env.NODE_ENV === 'production'){
	require('dotenv').config({ path: '.env.production' })
} else {
	require('dotenv').config({ path: '.env.development' })
}

console.log(`STARTING SERVER!!!\n`);

let PORT = process.env.PORT || 8080;
// PORT = 4000;

console.log(`server.js ### PORT:\n${JSON.stringify(PORT, null, 2)}`);

// var server = app.listen(PORT, '0.0.0.0', function () {
// var server = app.listen(PORT, '192.168.1.1', function () {
// var server = app.listen(config.port, '0.0.0.0', function () {    
// var server = app.listen(PORT, '0.0.0.0', function () {
// app.listen
// app.listen(PORT, '0.0.0.0', function () {
app.listen(PORT, function () {
	console.log(`App now running on => http://${process.env.DOMAIN}:${PORT}\n`);
});
