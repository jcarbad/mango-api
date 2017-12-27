/* jslint esversion:6 */
const mongoose = require('mongoose'),
	  User = require('../models/user'),
	  service = require('../services');

const signUp = (req, res) => {
	const user = new User({
		email: req.body.email,
		displayName: req.body.displayName,
		password: req.body.password
	});
	console.log(user);
	user.save(err => {
		console.log(err);
		if (err)
			return res.status(500).send({
				message: 'Error al crear el usuario'
			});

		return res.status(200).send({
			token: service.createToken(user)
		});
	});
};

const signIn = (req, res) => {
	User.find({ email: req.body.email }, (err, user) => {
		if (err)
			return res.status(500).send({ message: `ERROR: ${ err }` });

		if (!user)
			return res.status(404).send({ message: 'No existe el usuario' });

		req.user = user;
		res.status(200).send({
			message: 'Te has loggeado correctamente',
			token: service.createToken(user)
		});
	});
};

module.exports = {
	signIn,
	signUp
};