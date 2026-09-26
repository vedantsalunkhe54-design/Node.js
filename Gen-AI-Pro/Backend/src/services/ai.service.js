const {GoogleGenAI} = require("@google/genai")
const z = require ("zod")
const {zodToJsonSchema} = require ("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

const interviewReportSchema = z.object({

    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate profile matches the job "),



    technicalQuestions: z.array(z.object({

        question: z.string().describe("The technical question can be asked in the interview"),
        intention:  z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc")
        })).describe("Technical Questions that can be asked in the interview along with their intention and how to answer them"),

    behavioralQuestions: z.array(z.object({

        question: z.string().describe("The technical question can be asked in the interview"),
        intention:  z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc")
    })).describe("Behavioral Questions that can be asked in the interview along with their intention and how to answer them"),


    skillGaps: z.array(z.object({

        skill: z.string().describe("The skills which the candidate is lacking"),
        severity: z.string().describe("The severity of the skill gap "),
    })).describe("List of skill gaps the candidate profile along with their"),

    preparationPlan: z.array(z.object({

        day: z.string().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation, e.g. data structures, system design, mock interview"),
        tasks: z.string().describe("List of taks to be done on this day to follow the preparation plan, e.g. read a specific book")

    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively")


    })


async function generateInteviewReport(resume,selfDescription,jobDescription){

    const prompt = `Generate an interview report with the following details:
    Resume: ${resume}
    Self Description: ${selfDescription}
    Job Description: ${jobDescription}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
        config:{
            responseMimeType: "application/json",
            responseSchema:zodToJsonSchema(interviewReportSchema)
        }

    })

    return JSON.parse(response.text)


}



async function invokeGeminiAI() {
    
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: "Hello gemini ! Explain what is interview ?"
    })

    console.log(response.text)

}

module.exports = generateInteviewReport;