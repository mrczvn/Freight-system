'use strict';

const mongoose = require('mongoose')
const Product = require('../models/productModel');

// Método responsável por criar um novo 'Product'
exports.post = async (req, res) => {
    const product = await Product.create(req.body);

    try {
        if (await Product.find({ product }))

            return res.status(201).send({ message: 'Produto cadastrado com sucesso' });

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao tentar cadastrar Produto' })
    }
};

// Método responsável por excluir 'Product' pelo 'Id'
exports.delete = async (req, res) => {
    try {
        await Product.findOneAndDelete(req.params.id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover produto!'
        });
    }
};

// Método responsável por selecionar todos os Products:
exports.get = async (req, res) => {
    const product = await Product.find({}, 'name price amount');
    return res.status(200).send(product);
};

// Método responsável por selecionar 'Product' pelo 'Id' calculando o 'Frete'
exports.getById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    const { price } = product;

    try {
        let frete = await price >= 100 ? { value: price * 0.10 } : { value: price * 0.05 };

        let calcFrete = {
            produto: product, frete
        }

        return res.status(200).send(calcFrete);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao localizar produto' })
    }

};

// Método responsável por selecionar 'Products' abaixo do 'Price'
exports.getByPrice = async (req, res, next) => {
    try {
        const products = await Product.find({});

        let pricereq = parseInt(req.params.price)

        let prodfilter = products.filter((item) => {
            return item.price < pricereq
        })
        let freteAll = prodfilter.map(item => item.price  * 0.10)
        res.status(200).send({
            prodfilter, freteAll
        });

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }

};