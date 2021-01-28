import {Router} from 'express';

const router = Router();

router.post("/user", (req, res) =>{
    return res.status(200).send("My user was create");
});

export {router}
