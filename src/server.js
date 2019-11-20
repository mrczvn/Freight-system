'use strict';

// Instância dos Modulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Chamada do Express
const app = express();
const port = process.env.port || 3000;

// Conexão com a Base de Dados
mongoose.connect('mongodb+srv://mvrtr:mvrtr@cluster0-5lypc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Carrega as Rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(indexRoute);
app.use(productRoute);


app.listen(port);
console.log(`API rodando na porta ${port} ...`)