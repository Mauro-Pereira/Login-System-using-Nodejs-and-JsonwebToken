import { User } from "../Domain/Entities/User";

export interface IUseRepository{
    findByEmail(email:string): Promise<User>;
    findByPassword(password:string): Promise<User>;
    save(user: User): Promise<void>;
}