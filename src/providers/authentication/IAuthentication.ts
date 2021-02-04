import { User } from "../../Domain/Entities/User";

export interface IAuthentication{
    userAuthentication(email:string,password:string): Promise<User>;
}