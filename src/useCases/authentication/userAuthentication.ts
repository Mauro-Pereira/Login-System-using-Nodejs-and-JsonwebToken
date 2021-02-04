import { IAuthentication } from "../../providers/authentication/IAuthentication";
import { IUseRepository } from "../../repositories/IUseRepository";
import { IUserAuthentication } from "./UserAuthenticationDTO";

export class Authetication{
    constructor(
        private userRepository: IUseRepository,
        private authentication: IAuthentication
    ){}

    async execute(data: IUserAuthentication){
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if(!userAlreadyExists){
            throw Error("User not Exist");
        }

        const invalidPassword = await this.userRepository.findByPassword(data.password);
        if(!invalidPassword){
            throw Error("Invalid Password");
        }
    }


}