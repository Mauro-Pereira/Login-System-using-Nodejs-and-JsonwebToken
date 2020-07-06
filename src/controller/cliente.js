const cliente = require('../models/Cliente')
const endereco = require('../models/Endereco')
const auth = require('../config/auth.json')
const jsonwebtoken = require('jsonwebtoken')

function  generateToken(params = {}){
     return jsonwebtoken.sign(params,auth.SECRET,{expiresIn:300 })
 }

module.exports = {

    criaCliente: async (req,res,next) => {

        //Cria cliente
       await cliente.create({
            nome:req.body.nome,
            senha:req.body.senha,
            rua: req.body.rua,
            bairro:req.body.bairro,
            numero:req.body.numero,
            cidade:req.body.cidade,
            cep:req.body.cep,
            estado:req.body.estado
          
        }).then(cliente =>{
            res.status(200).send({cliente:cliente})
        }).catch(err => {
            console.log(err)
        })
        
    },

    fazLogin: async (req,res,next) => {

                
            await cliente.findOne({
                where:{
                    nome:req.body.nome, 
                    senha:req.body.senha
                }
            }).then(cliente => {

                if(!cliente){
                    res.send("Cliente não existe")
                }

            const id = cliente.id_cliente

            res.send({cliente,token:generateToken({id:id})})
            console.log(req.headers)
            
       })


 },

 

}