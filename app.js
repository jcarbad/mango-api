/* jslint esversion:6  */
const express = require('express'),
	  bodyParser = require('body-parser'), // parses the JSON, buffer, string and URL from HTTP
	  hbs = require('express-handlebars'), //Templating engine
	  app = express(),
	  api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Setting de handlebars
app.engine('hbs', hbs({
	defaultLayout: 'default',
	extname: '.hbs'
 }));

// Settea motor de plantillas (carpeta /views)
app.set('view engine', '.hbs');
app.use('/api', api);
app.get('/login', (req, res) => {
	res.render('login');
});

app.get('/', (req, res) => {
	res.render('product');
});

module.exports = app;