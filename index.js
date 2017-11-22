/* jslint esversion:6  */
const express = require('express'),
	  bodyParser = require('body-parser'),
	  app = express(),
	  port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/product', (req, res) => {
	res.status(200).send({
		products: []
	});
});

app.post('/api/product', (req, res) => {
	console.log(req.body);
	res.status(200).send({
		message: 'Producto recibido'
	});
});

app.get('/api/product/:productId', (req, res) => {
	
});

app.put('/api/product/:productId', (req, res) => {

});

app.delete('/api/product/:productId', (req, res) => {

});

app.listen(port, _ => {
	console.log(`API RESTful en http://localhost:${ port }`);
});
