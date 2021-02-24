import {Request,Response} from 'express';
import {Authentication} from './userAuthentication';


export class AuthenticationController{
    
    constructor(
        private userAuthentication: Authentication
    ){}
    
    async handle(request: Request, response:Response): Promise<Response>{
            const {email,password} = request.body;

            try{
                await this.userAuthentication.execute({email:email,password:password});
                return response.status(200).send();

            } catch(err){
                return response.status(400).json({err});
            }
    }
}