/* jslint esversion:6  */
const mongoose = require('mongoose'),
	  Schema = mongoose.Schema,
	  ProductSchema = Schema({
	  	name: String,
	  	picture: String,
	  	price: {
	  		type: Number,
	  		default: 0
	  	},
	  	category: {
	  		type: String,
	  		enum: ['computers', 'phones', 'accesories']
	  	},
	  	description: String
	  });

module.exports = mongoose.model('Product', ProductSchema);