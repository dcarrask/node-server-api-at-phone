'use strict'

const api = require('./routes')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

// const PORT = process.env.PORT || 8080;
// const PORT = 8080;
// const PORT = 80;

// var httpServer = http.createServer(app);
// var privateKey  = fs.readFileSync('./ssl/server.key', 'utf8');
// var certificate = fs.readFileSync('./ssl/server.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
// var https = require('https');
// var httpsServer = https.createServer(credentials, app);



// console.log(`app.js ### PORT:\n${JSON.stringify(PORT, null, 2)}`);




const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
  '*'
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Origin not allowed by CORS'));
//     }
//   }
// }

// // Enable preflight requests for all routes
// app.options('*', cors(corsOptions));

// app.get('/cors', cors(corsOptions), (req, res, next) => {
//   res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
// })










// // Add headers
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

// const cors = require('cors');
// api.use(cors);

// CORS ################################
// import cors from 'cors';
// const whitelist = ['*.*', 'http://localhost:4200', 'http://example2.com', 'http://localhost:8100/'];
// const corsOptions = {
//   credentials: true, // This is important.
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin))
//       return callback(null, true)
//       callback(new Error('Not allowed by CORS'));
//   }
// }
// app.use(cors(corsOptions));
app.use(cors());

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });



// app.use('/api', api);
app.use('/', api);




// httpServer.listen(8080);
// httpsServer.listen(8443);

if(process.env.NODE_ENV === 'production'){
	require('dotenv').config({ path: '.env.production' })
} else {
	require('dotenv').config({ path: '.env.development' })
}

console.log(`STARTING SERVER!!!\n`);

// let PORT = process.env.PORT || 8080;
// PORT = 4000;

const PORT = 80;

console.log(`server.js ### PORT:\n${JSON.stringify(PORT, null, 2)}`);

// var server = app.listen(PORT, '0.0.0.0', function () {
// var server = app.listen(PORT, '192.168.1.1', function () {
// var server = app.listen(config.port, '0.0.0.0', function () {    
// var server = app.listen(PORT, '0.0.0.0', function () {
// app.listen
app.listen(PORT, '0.0.0.0', function () {
// app.listen(PORT, function () {
	console.log(`App now running on => http://${process.env.DOMAIN}:${PORT}\n`);
});





// module.exports = app


/*
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/dcarrask/node-server-api-at-phone.git
git push -u origin master
*/