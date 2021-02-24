import { UserModelSequelize } from "../../infra/sequelize/Model/UserModelSequelize";
import { IAuthentication } from "./IAuthentication";
import {jwt} from 'jsonwebtoken';
import {Request, Response} from 'express';

export class AuthenticationImplentation implements IAuthentication{

    GenerateToken(params:{}): any{
        return jwt.sign(params,process.env.SECRET,{expiresIn:300 })

    }

    async userAuthentication(email: string, password:string): Promise<any>{

        let res: Response;
        let req: Request;
        
        UserModelSequelize.findOne({where:{
            email: email,
            password: password
        }}).then(user =>{

            const id = user.id

            res.status(200).send({user,token:this.GenerateToken({id:id})})
            console.log(req.headers)
        })
    }
}