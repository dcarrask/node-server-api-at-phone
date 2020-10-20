'use strict'

const api = require('./routes')

var express = require('express');
var bodyParser = require('body-parser');
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

app.listen(PORT, 'localhost', function () {
  console.log(`Listening to port: ${process.env.PORT}\n`);
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