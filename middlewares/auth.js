/* jslint esversion:6 */
const jqwt = require('jwt-simple'),
	  moment = require('moment'),
	  config = require('../config');

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

	const tokem = req.headers.authorization.split(" ")[1],
		  payload = jwt.decode(token, config.SECRET_TOKEN);

	if (payload.exp <= moment().unix()) {
		return res.status(401).send({
			message: 'EL token ha expirado'
		});
	}

	req.user = payload.sub;
	next();
};

module.exports = { isAuth };