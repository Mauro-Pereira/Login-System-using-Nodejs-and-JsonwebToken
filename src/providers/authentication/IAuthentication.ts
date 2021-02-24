import { User } from "../../Domain/Entities/User";

export interface IAuthentication{

    GenerateToken(params:{}): any;
    userAuthentication(email:string,password:string): Promise<Response>;
}