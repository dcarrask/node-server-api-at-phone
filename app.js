'use strict'

const api = require('./routes')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

const PORT = process.env.PORT || 8080;

// var httpServer = http.createServer(app);
// var privateKey  = fs.readFileSync('./ssl/server.key', 'utf8');
// var certificate = fs.readFileSync('./ssl/server.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
// var https = require('https');
// var httpsServer = https.createServer(credentials, app);

if(process.env.NODE_ENV === 'production'){
  require('dotenv').config({ path: '.env.production' })
} else {
  require('dotenv').config({ path: '.env.development' })
}

console.log(`app.js ### PORT:\n${JSON.stringify(PORT, null, 2)}`);




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





app.listen(PORT, 'localhost', function () {
  console.log(`CORS-enabled web server listening on port: ${process.env.PORT}\n`);
});




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

app.use('/api', api);


// httpServer.listen(8080);
// httpsServer.listen(8443);

module.exports = app


/*
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/dcarrask/node-server-api-at-phone.git
git push -u origin master
*/