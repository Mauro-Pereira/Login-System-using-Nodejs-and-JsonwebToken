
const jwt = require('jsonwebtoken');
const auth = require('../config/auth.json');

module.exports = function verifyJWT(req, res, next){
  
    
    const tokenAuth =  req.headers.authorization
    if (!tokenAuth) 
    return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    const parts = tokenAuth.split(' ')

    if(!parts.length === 2) 
    return res.status(401).send({error:'token error'})

    const[schema,token] = parts

    if(!/^Bearer$/i.test(schema)) 
    return res.status(401).send({error:'Token malformatted'})

    jwt.verify(token, auth.SECRET,(err, decoded) => {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      return next();
    });

    
}  

