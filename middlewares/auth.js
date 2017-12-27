/* jslint esversion:6 */
const services = require('../services');

/**
	Realiza la validacion mediante JW token. Verifica si hay autorizacion (token valido)
	y expiracion del token.
*/
const isAuth = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).send({
			message: 'No tienes authorizacion'
		});
	}

	const token = req.headers.authorization.split(' ')[1];

	services.decodeToken(token)
		.then(response => {
			req.user = response;
			next();
		})
		.catch(response => res.status(response.status));
};

module.exports = { isAuth };