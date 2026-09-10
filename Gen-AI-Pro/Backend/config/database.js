const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URL);

    console.log("Database connected successfully");}
    catch (error) {
        console.error("Error connecting to database:", error);
    }
}

module.exports = connectDB;