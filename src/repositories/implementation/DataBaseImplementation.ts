import { response } from "express";
import { User } from "../../Domain/Entities/User";
import { UserModelSequelize } from "../../infra/sequelize/Model/UserModelSequelize";
import { IUseRepository } from "../IUseRepository";

export class DataBaseImplementation implements IUseRepository{

    async findByEmail(email:string): Promise<UserModelSequelize>{

      try{

       let user = await UserModelSequelize.findOne({where:{email:email}});
       return user;

      } catch(error){
          console.log("Error " + error)
      }
 
    }

    async findByPassword(password: string): Promise<UserModelSequelize>{
          try{

            let user = await UserModelSequelize.findOne({where:{password:password}});
            return user;

          }catch(error){
            console.log("Error " + error);
          }
    }

    async save(user: User): Promise<void>{
      try{

        await UserModelSequelize.create(user);
        response.status(200).json("User create with successfull")

      }catch(error){
        console.log("Error " + error);
      }
    }
}


