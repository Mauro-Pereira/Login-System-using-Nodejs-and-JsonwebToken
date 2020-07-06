//importando banco de dados
const Sequelize = require('sequelize')
//configurando banco de dados 
const sequelize = new Sequelize('ecommerce','root','',{
    host: "localhost",
    dialect:"mysql",
    logging:false,
    define:{

        timestamps:false

    }
})

/*
sequelize.sync({force: true}).then(() => {

    console.log("Criado com sucesso");
    
})
*/


module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}