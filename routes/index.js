/* jslint esversion:6  */
const express = require('express'),
	  api = express.Router(),
	  auth = require('../middlewares/auth.js'),
	  ProductCtrl = require('../controllers/product');

// GET: todos los productos
api.get('/product', ProductCtrl.getProducts);

//POST: un nuevo producto
api.post('/product', ProductCtrl.createProduct);

//GET: un producto especifico
api.get('/product/:productId', ProductCtrl.getProduct);

//PUT: actualiza producto
api.put('/product/:productId', ProductCtrl.updateProduct);

//DELETE: borra producto especifico 
api.delete('/product/:productId', ProductCtrl.deleteProduct);

// Rutas que utilizan middleware (auth)
api.get('/private', auth.isAuth, (req,res) => res.status(200).send({message: 'Tienes acceso'}));

module.exports = api;