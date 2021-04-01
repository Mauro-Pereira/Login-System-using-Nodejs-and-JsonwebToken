import { IAuthentication } from "./IAuthentication";
import jwt = require("jsonwebtoken")
require('dotenv').config()

import {Response} from 'express'

let res: Response;

res.send("teste")




export class AuthenticationImplentation implements IAuthentication{

    

    GenerateToken(params:{}): any{

        return jwt.sign(params,process.env.SECRET,{expiresIn:300 })
    }


     userAuthentication(user:any): any{


       // res.send("aló")
        const id = user.id
        //res.send({user,token:this.GenerateToken({id:id})});
        
           // console.log(request.headers)
       
    }
}