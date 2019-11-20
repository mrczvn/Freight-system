'use strict'

const express = require('express');
const routes = express.Router();
const ProductController = require('../controllers/productController');


// Definindo as rotas do CRUD - Product
// Rota responsável por criar um novo Product: (POST):
routes.post('/products', ProductController.post);

// Rota responsável por selecionar todos os Products: (GET):
routes.get('/products', ProductController.get);

// Rota responsável por excluir 'Product' pelo 'Id': (DELETE):
routes.delete('/product-by-id/:id', ProductController.delete);

// Rota responsável por selecionar 'Product' pelo 'Id': (GET):
routes.get('/product-by-id/:id', ProductController.getById);

// Rota responsável por selecionar 'Product' pelo 'Price': (GET):
routes.get('/product-by-price/:price', ProductController.getByPrice);

module.exports = routes;