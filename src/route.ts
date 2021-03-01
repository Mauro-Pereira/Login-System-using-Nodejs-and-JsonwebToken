import {Router} from 'express';
import { AuthenticationController } from './useCases/authentication';
import { createUserController } from './useCases/createUser';

const router = Router();

router.post("/", (req, res) =>{
    return createUserController.handle(req,res);
});

router.post("/authentication",(req, res) =>{
    return AuthenticationController.handle(req, res);
})

export {router}
