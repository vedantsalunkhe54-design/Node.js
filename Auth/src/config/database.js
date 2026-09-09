import mongoose from "mongoose";
import config from "../config/config.js";

async function connectDB() {
    await mongoose.connect(config.mongoURI);

    console.log("MongoDB connected successfully");
}

export default connectDB;