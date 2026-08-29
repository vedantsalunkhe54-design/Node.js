import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/auth", authRouter);


app.get("/", (req, res) => {
    res.send("Server is working");
});


export default app;
