'use strict';
require('babel-register');

const express = require('express');
const proxy = require('proxy-middleware');
const url = require('url');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const auth = require('http-auth');
const path = require('path');
const compression = require('compression');
const config = require('./config/config.js');

//to throw uncaught exception error
process.on('uncaughtException',  (exception) => {
  console.log(JSON.stringify(exception));
  console.log(exception.stack);
});

const app = express();
app.use(cookieParser());

//gzip response
app.use(compress());
app.enable('trust proxy');

// app.use (function (req, res, next) {
//   if(req.headers["x-forwarded-proto"] === "https" || req.hostname === 'localhost'){
//     return next();
//   };
//   res.redirect('https://'+req.hostname+req.url);
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join('./')));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(config.PORT, () => {
  console.log('App running on' + config.PORT);
});
