const express = require('express')
const rota = express.Router()
const db = require('../models/db');
const verifyToken = require('../config/verificaJWT')


const clienteController = require('../controller/cliente')

   
  


//Rotas relacionadas aos Clientes
rota.post('/',clienteController.criaCliente)
rota.post('/fazLogin', clienteController.fazLogin)

module.exports = rota