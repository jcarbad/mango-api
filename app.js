/* jslint esversion:6  */
const express = require('express'),
	  bodyParser = require('body-parser'),
	  app = express(),
	  api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;