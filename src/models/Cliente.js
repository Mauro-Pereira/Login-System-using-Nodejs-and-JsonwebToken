const db = require('./db');
const asso_end = require('./Endereco');
//const asso_carrinho = require('./Carrinho')

const Cliente = db.sequelize.define('clientes',{

    id_cliente:{
        type:db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    nome:{
        type:db.Sequelize.STRING
    },
    senha:{
        type:db.Sequelize.TEXT
    },
    rua:{
        type:db.Sequelize.STRING
    },
    bairro:{
        type:db.Sequelize.STRING
    },
    numero:{
        type:db.Sequelize.INTEGER
    },
    cidade:{
        type:db.Sequelize.STRING
    },
    cep:{
        type:db.Sequelize.STRING
    },
    estado:{
        type:db.Sequelize.STRING
    }
});


module.exports = Cliente