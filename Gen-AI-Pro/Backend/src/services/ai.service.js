const {GoogleGenAI} = require("@google/genai")

const ai = new GoogleGenAI({
    apiKey: process.env.GoogleGenAI
})


async function invokeGeminiAI() {
    
    const response = await ai.authTokensmodels.generateContent({
        model: "gemini-2.5-flash",
        contents: "Hello gemini ! Explain what is interview ?"
    })

    console.log(response.text)

}

module.exports = invokeGeminiAI;