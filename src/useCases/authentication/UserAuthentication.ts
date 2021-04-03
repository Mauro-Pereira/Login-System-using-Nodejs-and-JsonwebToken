import { IAuthentication } from "../../providers/authentication/IAuthentication";
import { IUseRepository } from "../../repositories/IUseRepository";
import { IUserAuthenticationDTO } from "./IUserAuthenticationDTO";
import {Response,Request} from 'express';


export class UserAuthentication{
     
    constructor(
        private userRepository: IUseRepository,
        private authentication: IAuthentication
    ){}

    async execute(data: IUserAuthenticationDTO, response:Response,request:Request){
    
        const verifyUser = await this.userRepository.findByEmailAndPassword(data.email,data.password);
        
        if(!verifyUser){
            throw new Error("User not Exist");
        }


        await this.authentication.userAuthentication(verifyUser,response,request);


    }


}