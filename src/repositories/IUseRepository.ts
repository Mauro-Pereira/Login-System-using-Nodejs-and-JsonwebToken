import { UserModelSequelize } from "../infra/sequelize/Model/UserModelSequelize";
import {User} from "../Domain/Entities/User";

export interface IUseRepository{
    findByEmail(email:string): Promise<UserModelSequelize>;
    findByPassword(password:string): Promise<UserModelSequelize>;
    findByEmailAndPassword(email:any,password:any):Promise<UserModelSequelize>;
    save(user: User): Promise<void>;
}