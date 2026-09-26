require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./config/database")
const invokeGeminiAI = require("./src/services/ai.service")

connectToDB()

invokeGeminiAI()


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})