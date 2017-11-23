/* jslint esversion:6  */
const express = require('express'),
	  api = express.Router(),
	  ProductCtrl = require('../controllers/product');

api.get('/product', ProductCtrl.getProducts);

api.post('/product', ProductCtrl.createProduct);

api.get('/product/:productId', ProductCtrl.getProduct);

api.put('/product/:productId', ProductCtrl.updateProduct);

api.delete('/product/:productId', ProductCtrl.deleteProduct);

module.exports = api;