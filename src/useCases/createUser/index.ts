import { DataBaseImplementation } from "../../repositories/implementation/DataBaseImplementation";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const databaseimplementation = new DataBaseImplementation();
const createUser = new CreateUserUseCase(databaseimplementation);

const createUserController = new CreateUserController(createUser);

export {createUserController, createUser};