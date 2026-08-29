import {Router} from "express";
import * as authController from "../controller/auth.controller.js";


const authRouter = Router();


/*
        post /api/auth/register
*/


authRouter.post("/register", authController.register);

authRouter.get("/get-me", authController.getMe);

/*
        Get /api/auth/refresh-token
*/

authRouter.get("/refresh-token", authController.refreshToken);



export default authRouter;