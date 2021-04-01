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
                return response.status(200).json("logged with successfull");

            } catch(error){
            
                return response.status(400).json({error: error.message});
                
            }
    }
}