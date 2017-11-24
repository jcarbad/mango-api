/* jslint esversion:6  */
const express = require('express'),
	  api = express.Router(),
	  auth = require('../middlewares/auth.js'),
	  ProductCtrl = require('../controllers/product');

api.get('/product', ProductCtrl.getProducts);

api.post('/product', ProductCtrl.createProduct);

api.get('/product/:productId', ProductCtrl.getProduct);

api.put('/product/:productId', ProductCtrl.updateProduct);

api.delete('/product/:productId', ProductCtrl.deleteProduct);

api.get('/private', auth.isAuth, (req,res) => res.status(200).send({message: 'Tienes acceso'}));

module.exports = api;