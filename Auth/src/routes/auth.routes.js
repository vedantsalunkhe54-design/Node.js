import {Router} from "express";
import * as authController from "../controller/auth.controller.js";


const authRouter = Router();


/*
        post /api/auth/register
*/


authRouter.post("/register", authController.register);

authRouter.get("/get-me", authController.getMe);

/*
        Get /api/auth/referesh-token
*/

authRouter.get("/referesh-token", authController.refereshToken);



export default authRouter;