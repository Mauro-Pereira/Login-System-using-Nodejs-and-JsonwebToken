const db = require('./db')
const end = require('./Endereco')
const clien = require('./Cliente')
const prod = require('./Produto')
const ped = require('./Pedido')
const pedido_produto = require('./PedidoProduto')


db.sequelize.sync({force: true}).then(() => {

    console.log("Criado com sucesso");
    
})