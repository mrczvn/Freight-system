'use strict'

const express = require('express');
const routes = express.Router();

routes.use( (req, res, next) => {
    console.log('Algo está acontecendo aqui...');
    next();
});

// Rota Principal 
routes.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Tudo OK!',
        version: '1.0.0'
    });
});

module.exports = routes;