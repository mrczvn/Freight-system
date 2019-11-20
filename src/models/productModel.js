'use strict';
/*
 * Classe: Product
 *
 * id: (Number - guid gerado pelo MongoDb)
 * nameProduct: String
 * price: String
 * amount: Number
 * 
 */

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    amount: Number
})

module.exports = mongoose.model('Product', ProductSchema);