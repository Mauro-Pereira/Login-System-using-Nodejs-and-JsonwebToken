import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
require('dotenv').config();

export function NormalizeJWT(req: Request, res:Response): any{
    let tokenAuth =  req.headers.authorization;

    if (!tokenAuth) 
    return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    const parts = tokenAuth.split(" ",2);

    if(!(parts.length === 2)) 
    return res.status(401).send({error:'token error'});

    const[schema,token] = parts

    if(!/^Bearer$/i.test(schema)) 
    return res.status(401).send({error:'Token malformatted'});

    return token;
}


// declation of new property on Request interface
declare global{
    namespace Express{
        interface Request{
            userId: any
        }
    }
}

export function verifyJWT(req: Request, res: Response, next: NextFunction): any{

    jwt.verify(NormalizeJWT(req, res), process.env.SECRET,(err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
        // se tudo estiver ok, salva no request para uso posterior
        //if is all right, save it on request
        req.userId = decoded.id;
        return next();
      });
}