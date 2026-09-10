const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middlewawre');


const authRouter = Router();

authRouter.post('/register', authController.registerUser);
authRouter.post('/login', authController.loginUser);


authRouter.get('/logout', authController.logoutUser);
authRouter.get('/get-me', authMiddleware.authenticateToken, authController.getMeController);


module.exports = authRouter;