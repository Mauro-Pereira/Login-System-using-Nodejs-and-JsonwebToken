import { User } from "../../Domain/Entities/User";
import { IUseRepository } from "../../repositories/IUseRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{

    constructor(
        private userRepository: IUseRepository
    ){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if(userAlreadyExists){
            throw new Error("User already exits.");
        }

        const user = new User(data.name,data.email,data.password);
        await this.userRepository.save(user);
    }
}