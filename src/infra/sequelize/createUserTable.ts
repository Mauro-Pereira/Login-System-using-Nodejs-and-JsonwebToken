import {DataTypes} from 'sequelize';
import { ICreateTable } from './interfaces/ICreateTable';
import { UserModelSequelize } from './Model/UserModelSequelize';




export class CreateUserTable implements ICreateTable{

    createTable(model:any): any{
        
        UserModelSequelize.init(
            {
                id:{
                    type: DataTypes.STRING,
                    primaryKey:true,
                    allowNull: false,
                },
                name:{
                    type:DataTypes.STRING,
                    allowNull: false,
                },
                email:{
                    type: DataTypes.STRING,
                    allowNull:false,
                },
                password:{
                    type:DataTypes.STRING,
                    allowNull:false,
                },
        
            },
            {
                tableName: "Users",
                sequelize: model
            }
        );

        model.sync({force:true}).then(() => console.log("User table was created"));
        
       
    }
}

