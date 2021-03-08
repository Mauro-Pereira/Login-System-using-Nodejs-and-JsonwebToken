import {DataTypes} from 'sequelize/types';
import { ICreateTable } from './interfaces/ICreateTable';
import {DataBaseConnectionImplementation} from './DataBaseConnectionImplementation'



export class CreateUserTable implements ICreateTable{

    
    createTable(model: any): any{

        model.init(
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
                sequelize: DataBaseConnectionImplementation
            }
        );
        
        model.sync({force:true}).then(() => console.log("User table was created"));
    }
}

