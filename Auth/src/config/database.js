import mongoose from "mongoose";
import config from "./config.js";
import { CloudCog } from "lucide-react";



async function connectDB() {
    await mongoose.connect(config.MONGO_URI);

    console.log("MongoDB connected successfully");
}

export default connectDB;