import { IAuthentication } from "../../providers/authentication/IAuthentication";
import { IUseRepository } from "../../repositories/IUseRepository";
import { IUserAuthenticationDTO } from "./IUserAuthenticationDTO";

export class UserAuthentication{
    constructor(
        private userRepository: IUseRepository,
        private authentication: IAuthentication
    ){}

    async execute(data: IUserAuthenticationDTO){
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if(!userAlreadyExists){
            throw Error("User not Exist");
        }

        const invalidPassword = await this.userRepository.findByPassword(data.password);
        if(!invalidPassword){
            throw Error("Invalid Password");
        }

        await this.authentication.userAuthentication(data.email,data.password);

    }


}