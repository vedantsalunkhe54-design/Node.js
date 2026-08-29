import {Router} from "express";
import * as authController from "../controller/auth.controller.js";


const authRouter = Router();


/*
        post /api/auth/register
*/


authRouter.post("/register", authController.register);



export default authRouter;