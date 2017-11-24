/* jslint esversion:6 */
const jwt = require('jwt-simple'),
	  moment = require('moment'),
	  config = require('../config');

const createToken = user => {
	const payload = {
		sub: user.id,
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix()
	};

	return jwt.encode(payload, config.SECRET_TOKEN);
};

const decodeToken = token => {
	const decoded = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, config.SECRET_TOKEN);
			if (payload.exp <= moment().unix()) {
				reject({
					message: 'EL token ha expirado',
					status: 401
				});
			}

			resolve(payload.sub);
		} catch (err) {
			reject({
				status: 500,
				message: 'Invalid token'
			});
		}
	});

	return decoded;
};

module.exports = {
	createToken,
	decodeToken
};