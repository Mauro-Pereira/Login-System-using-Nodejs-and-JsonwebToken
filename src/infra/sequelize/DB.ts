import {Sequelize,BuildOptions, DataTypes} from 'sequelize';
import { UserModelSequelize } from './Model/UserModelSequelize';
    
export const DB = new Sequelize('Authentication','root','',{
    host:"Authentication",
    dialect:"mysql",
    logging:false,
    define:{

        timestamps:false

    }
});

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
        sequelize: DB
    }
);

UserModelSequelize.sync({force:true}).then(() => console.log("User table was created"));
