import {Request,Response} from 'express';
import {UserAuthentication} from './UserAuthentication';


export class UserAuthenticationController{
    
    constructor(
        private userAuthentication: UserAuthentication
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