import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/auth", authRouter);
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("Server is working");
});


export default app;
