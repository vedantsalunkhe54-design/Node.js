const { Router } = require('express');
const authController = require('../controllers/auth.controller');


const authRouter = Router();

authRouter.post('/register', authController.registerUser);
authRouter.post('/login', authController.loginUser);


module.exports = authRouter;