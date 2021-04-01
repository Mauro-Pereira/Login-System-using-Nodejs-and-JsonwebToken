import {DataTypes, Model} from 'sequelize';
import { DB } from '../DataBase';
//import {DB} from './../DB';

export class UserModelSequelize extends Model{
    public id: string;
    public name: string;
    public email: string;
    public password:string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

};


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

//UserModelSequelize.sync({force:true}).then(() => console.log("User table was created"));
