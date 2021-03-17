//import {DB} from './DB';
//import {UserModelSequelize} from './Model/UserModelSequelize';
import {CreateUserTable} from './createUserTable';
import { DataBaseConnectionImplementation } from './DataBaseConnectionImplementation';

const dataBase = new DataBaseConnectionImplementation();
//force database criation
dataBase.DatabaseConnection().sync({force: true}).then(() => {console.log("Database create with successfull");})

const user = new CreateUserTable();
user.createTable(dataBase.DatabaseConnection());


//DB.sync({force: true}).then(() => {console.log("Criado com sucesso");})