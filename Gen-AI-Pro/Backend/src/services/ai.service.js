const {GoogleGenAI} = require("@google/genai")
const z = require ("zod")
const {zodToJsonSchema} = require ("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

const interviewReportSchema = z.object({

    matchScore: z.number().description("A score between 0 and 100 indicating how well the candidate profile matches the job description"),



    technicalQuestions: z.array(z.object({

        question: z.string().description("The technical question can be asked in the interview"),
        intention:  z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take etc")
        })).description("Technical Questions that can be asked in the interview along with their intention and how to answer them"),

    behavioralQuestions: z.array(z.object({

        question: z.string().description("The technical question can be asked in the interview"),
        intention:  z.string().description("The intention of interviewer behind asking this question"),
        answer: z.string().description("How to answer this question, what points to cover, what approach to take etc")
    })).description("Behavioral Questions that can be asked in the interview along with their intention and how to answer them"),


    skillGaps: z.array(z.object({

        skill: z.string().description("The skills which the candidate is lacking"),
        severity: z.string().description("The severity of the skill gap "),
    })).description("List of skill gaps the candidate profile along with their"),

    preparationPlan: z.array(z.object({

        day: z.string().description("The day number in the preparation plan, starting from 1"),
        focus: z.string().description("The main focus of this day in the preparation, e.g. data structures, system design, mock interview"),
        tasks: z.string().description("List of taks to be done on this day to follow the preparation plan, e.g. read a specific book")

    })).description("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively")


    })


async function generateInterviewReport(resume,selfDescription,jobDescription){



}



async function invokeGeminiAI() {
    
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: "Hello gemini ! Explain what is interview ?"
    })

    console.log(response.text)

}

module.exports = invokeGeminiAI;