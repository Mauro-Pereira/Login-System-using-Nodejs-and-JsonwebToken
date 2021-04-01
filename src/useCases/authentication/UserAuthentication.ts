import { IAuthentication } from "../../providers/authentication/IAuthentication";
import { IUseRepository } from "../../repositories/IUseRepository";
import { IUserAuthenticationDTO } from "./IUserAuthenticationDTO";


export class UserAuthentication{
    constructor(
        private userRepository: IUseRepository,
        private authentication: IAuthentication
    ){}

    async execute(data: IUserAuthenticationDTO){
    
        const verifyUser = await this.userRepository.findByEmailAndPassword(data.email,data.password);
        
        if(!verifyUser){
            throw new Error("User not Exist");
        }
        


       // console.log("teste")

      //  console.log(data.email,data.password)

        await this.authentication.userAuthentication(verifyUser);

    }


}