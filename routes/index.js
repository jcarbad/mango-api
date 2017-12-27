/* jslint esversion:6  */
const express = require('express'),
	  api = express.Router(),
	  auth = require('../middlewares/auth.js'),
	  ProductCtrl = require('../controllers/product'),
	  UserCtrl = require('../controllers/user');

// GET: todos los productos
api.get('/product', ProductCtrl.getProducts);

//POST: un nuevo producto
api.post('/product', auth.isAuth,ProductCtrl.createProduct);

//GET: un producto especifico
api.get('/product/:productId', ProductCtrl.getProduct);

//PUT: actualiza producto
api.put('/product/:productId', ProductCtrl.updateProduct);

//DELETE: borra producto especifico 
api.delete('/product/:productId', auth.isAuth, ProductCtrl.deleteProduct);

api.post('/signup', UserCtrl.signUp);

api.post('/signin', UserCtrl.signIn);

// Rutas que utilizan middleware (auth)
api.get('/private', auth.isAuth, (req,res) => res.status(200).send({message: 'Tienes acceso'}));

module.exports = api;