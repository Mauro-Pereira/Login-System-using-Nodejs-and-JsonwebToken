const express = require('express');
const app = express();
const rotas = require('./src/rotas/rotas')
const bodyParse = require('body-parser')
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

//configurando porta
const port = normalizaPort(process.env.PORT || '3000');
//normalizando porta
function normalizaPort(val){

    const port = parseInt(val,10);
    if(isNaN(port)){

        return val;
    }

    if(port >= 0){

        return port;
    }

    return false;

}

//chamando rotas 
app.use('/',rotas)
app.use('/fazLogin',rotas)

//escutando na porta criada
app.listen(port,function(){
    console.log('port is listen in ' + port)
})