/* jshint esversion:6 */
const Product = require('../models/product');

function getProducts (req, res) {
	Product.find({}, (err, products) => {
		if (err)
			return res.status(500).send({ message: 'Error al realizar peticion'});
		if (!products)
			return res.status(404).send({ message: 'No existen productos' });

		res.status(200).send({ products });
	});

}

const createProduct = (req, res) => {
	console.log('POST /api/product');
	console.log(req.body);

	let product = new Product();
	product.name = req.body.name;
	product.picture = req.body.picture;
	product.price = req.body.price;
	product.category = req.body.category;
	product.description = req.body.description;

	product.save((err, productStored) => {
		if (err) res.status(500).send({
			message: `ERROR: No se pudo guardar producto. ${ err }`
		});

		res.status(200).send({
			product: productStored
		});
	});
};

const getProduct = (req, res) => {
	let productId = req.params.productId;

	Product.findById(productId, (err, product) => {
		if (err)
			return res.status(500).send({
				message: `ERROR: ${ err }`
			});

		if (!product)
			return res.status(404).send({
				message: 'El producto no existe'
			});

		res.status(200).send({ product });
	});
};

const updateProduct = (req, res) => {
	let productId = req.params.productId;
	Product.findByIdAndUpdate(productId, req.body, (err, productUpdated) => {
		if (err)
			res.status(500).send({ message: 'Error al actualizar' });
		res.status(200).send({ product: productUpdated });
	});
};

const deleteProduct = (req, res) => {
	let productId = req.params.productId;
	Product.findById(productId, (err, product) => {
		if (err)
			res.status(500).send({ message: 'Error al borrar' });
		product.remove(err => {
			if (err) res.status(500).send({ message: 'Error al borrar' });
			res.status(200).send({ message: 'El producto ha sido eliminado.' });
		});
	});
};

module.exports = {
	getProducts,
	createProduct,
	getProduct,
	updateProduct,
	deleteProduct
};