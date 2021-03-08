import { ICreateDataBase } from "./interfaces/ICreateDataBase";
import {Sequelize} from 'sequelize';


export class DataBaseConnectionImplementation implements ICreateDataBase{

    DatabaseConnection(): any{
       
        const DataBase = new Sequelize('authentication','root','1234',{
            host:"localhost",
            dialect:"mysql",
            logging:false,
            define:{
        
                timestamps:false
        
            }
        });

        return DataBase;
    }

    ForceDataBaseConnection(db:Sequelize): any{
        return db.sync({force:true}).then(() => console.log("DataBase was created"));
    }

}