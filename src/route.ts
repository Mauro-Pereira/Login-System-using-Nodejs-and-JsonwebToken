import {Router} from 'express';
import { verifyJWT } from './infra/JsonWebToken/verifyJWT';
import { AuthenticationController } from './useCases/authentication';
import { createUserController } from './useCases/createUser';

const router = Router();

router.get("/",(req, res) =>{
    return res.status(200).send("running on port 9001");
})

router.post("/createUser", (req, res) =>{
    return createUserController.handle(req,res);
});

router.post("/authentication",(req, res) =>{
    return AuthenticationController.handle(req, res);
})

router.get("/protectedRoute",verifyJWT,(req,res) =>{
    return res.status(200).json("Welcome")
})

export {router}
