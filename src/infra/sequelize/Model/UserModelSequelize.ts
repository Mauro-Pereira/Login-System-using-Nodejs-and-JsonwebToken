import {Sequelize,Model,} from 'sequelize';
import {DB} from '../DB';

export class UserModelSequelize extends Model{
    public id: string;
    public name: string;
    public email: string;
    public password:string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

};

