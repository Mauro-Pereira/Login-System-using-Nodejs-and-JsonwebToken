import { IAuthentication } from "./IAuthentication";
import jwt = require("jsonwebtoken")
require('dotenv').config()
import {Request, Response} from 'express'







export class AuthenticationImplentation implements IAuthentication{



    GenerateToken(params:{}): any{

        return jwt.sign(params,process.env.SECRET,{expiresIn:300 })
    }



  async userAuthentication(user:any,response:Response,request:Request): Promise<any>{
       
       try{

        const id = user.id

        return response.send({user,token:this.GenerateToken({id:id})});

       }catch(err){

        console.log(err);

       }
        
    }
}