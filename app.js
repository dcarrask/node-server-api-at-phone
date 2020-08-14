'use strict'

const api = require('./routes')

var express = require('express'),
    app = express();
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

app.use('/api', api);

const cors = require('cors');
api.use(cors);

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