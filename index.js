/* jslint esversion:6  */
const mongoose = require('mongoose'),
	  app = require('./app'),
	  config = require('./config');
	
mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
	if (err) throw err;
	console.log('Conexion a la base de datos establecida...');
	app.listen(config.port, _ => {
		console.log(`API RESTful en http://localhost:${ config.port }`);
	});
});

