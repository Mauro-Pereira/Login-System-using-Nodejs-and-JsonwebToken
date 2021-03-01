import { AuthenticationImplentation } from "../../providers/authentication/AuthenticationImplementation";
import { DataBaseImplementation } from "../../repositories/implementation/DataBaseImplementation";
import { Authentication } from "./Authentication";
import { AuthenticationController } from "./AuthenticationController";

const userRepositoryImplementation = new DataBaseImplementation();
const authenticationImplementation = new AuthenticationImplentation();

const userAuthentication = new Authentication(userRepositoryImplementation,authenticationImplementation);

const userAuthenticationController = new AuthenticationController(userAuthentication);

export {userAuthenticationController, userAuthentication};