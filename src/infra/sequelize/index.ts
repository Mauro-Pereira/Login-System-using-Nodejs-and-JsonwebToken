import { CreateUserTable } from "./createUserTable";
import { DataBaseConnectionImplementation } from "./DataBaseConnectionImplementation";
import { UserModelSequelize } from "./Model/UserModelSequelize";


const user = new UserModelSequelize();

const dataBaseConnection = new DataBaseConnectionImplementation();
dataBaseConnection.DatabaseConnection();

const userTable = new CreateUserTable();
userTable.createTable(user);