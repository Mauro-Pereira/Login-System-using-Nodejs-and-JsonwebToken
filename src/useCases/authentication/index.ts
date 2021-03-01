import { AuthenticationImplentation } from "../../providers/authentication/AuthenticationImplementation";
import { DataBaseImplementation } from "../../repositories/implementation/DataBaseImplementation";
import { UserAuthentication } from "./UserAuthentication";
import { UserAuthenticationController } from "./UserAuthenticationController";

const userRepositoryImplementation = new DataBaseImplementation();
const authenticationImplementation = new AuthenticationImplentation();

const Authentication = new UserAuthentication(userRepositoryImplementation,authenticationImplementation);

const AuthenticationController = new UserAuthenticationController(Authentication);

export {AuthenticationController, Authentication};