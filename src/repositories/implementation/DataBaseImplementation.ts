import { response } from "express";
import { User } from "../../Domain/Entities/User";
import { UserModelSequelize } from "../../infra/sequelize/Model/UserModelSequelize";
import { IUseRepository } from "../IUseRepository";

export class DataBaseImplementation implements IUseRepository{

  async findByEmail(email:string): Promise<UserModelSequelize>{

      
      try{

      return await UserModelSequelize.findOne({where:{email:email}});

      } catch(error){
          console.log("Error findByEmail " + error)
      }

 
    }

    async findByEmailAndPassword(email:any,password:any): Promise<UserModelSequelize>{
      try{

        let user = await UserModelSequelize.findOne({where:{email:email,password:password}});
        return user;

      }catch(error){

        console.log("Error " + error);

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

    console.log(user)
      
      try{

       await UserModelSequelize.create({
         id:user.getId(),
         name:user.getName(),
         email:user.getEmail(),
         password:user.getPassword()
       });
        response.status(200).json("User create with successfull")

      }catch(error){
        console.log("Error Save method " + error);
      }


    }
}


