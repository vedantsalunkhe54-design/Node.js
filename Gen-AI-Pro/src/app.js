const express = require ('express');
const authRouter = require('./Routes/auth.routes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);


authRouter.post("/register", registerUser);



module.exports = app;