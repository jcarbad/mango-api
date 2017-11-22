/* jslint esversion:6 */
const express = require('express'),
	  bodyParser = require('body-parser'),
	  app = express(),
	  port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ 
	extended: false 
}));

app.use(bodyParser.json);

app.get('/hola:name', (req, res) => {
	res.send({
		message: `Hola mundo, ${ res.params.names }!`
	});
});

app.listen(port, _ => console.log(`API RESTful escuchando en localhost:${ port }...`));

