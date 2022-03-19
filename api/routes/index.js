const express = require('express');
const funcionarios = require('./funcionariosRoute');

module.exports = app => {
    app.use(express.json());
    app.use(funcionarios);
    }