import {Request, Response} from 'express';
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{

    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(resquest: Request, response: Response): Promise<Response>{
        const {name, email, password} = resquest.body;

        try{
            
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })

            return response.status(201).send();
        }catch(err){
            return response.status(400).json({err})
        }
    }
}