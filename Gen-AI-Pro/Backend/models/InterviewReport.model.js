const mongoose = require ('mongoose')

const techincalQuestionScheme = new mongoose.Schema({
    question: {
        type: String,
        required: {toUpperCase, "Techincal question required"
    
        }
    }
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription : { type:String, required: [true, "Job Description is required"]},
    resume: {type: String},
    selfDescription: { type: String},
    matchScore: {type: Number, min: 0, max: 100},
    technicalQuestions: []
})