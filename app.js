/* jslint esversion:6  */
const express = require('express'),
	  bodyParser = require('body-parser'), // parses the JSON, buffer, string and URL from HTTP
	  hbs = require('express-handlebars'), //Templating engine
	  app = express(),
	  api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('.hbs'. hbs({
	defaultLayout: 'default'
 }));
app.use('/api', api);

module.exports = app;