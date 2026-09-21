const mongoose = require ('mongoose')

const techincalQuestionScheme = new mongoose.Schema({
    question: {
        type: String,
        required:[true, "Techincal question required"]
        },
        intention:{
            type: String,
            required: [true, "intention is required"]
        },
        answer:{
            type: String,
            required: [true, "Answer is required"]
        },
    },{
        _id: false
})

const behavioralheQuestionScheme = new mongoose.Schema({
    question: {
        type: String,
        required:[true, "Techincal question required"]
        },
        intention:{
            type: String,
            required: [true, "intention is required"]
        },
        answer:{
            type: String,
            required: [true, "Answer is required"]
        },
    },{
        _id: false
})

const skillGapScheme = new mongoose.Schema({
    skill: {
        type: String,
        required:[true, "skill required"]
        },
        severity:{
            type: String,
            enum: ["low", "medium", "high"],
            required: [true,"severity is required"]
        }
    },{
        _id: false
})

const preparationPlanScheme = new mongoose.Schema({
    day: {
        type: Number,
        required:[true, "Day is required"]
        },
        focus:{
            type: String,
            required: [true, "focus is required"]
        },
        tasks:{
            type: String,
            required: [true, "Task is required"]
        },
    },{
        _id: false
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription : { type:String, required: [true, "Job Description is required"]},
    resume: {type: String},
    selfDescription: { type: String},
    matchScore: {type: Number, min: 0, max: 100},
    technicalQuestions: [techincalQuestionScheme],
    behavioralQuestions: [behavioralheQuestionScheme],
    skillGaps: [skillGapScheme],
    preparationPlan: [preparationPlanScheme],
    timestamps: true
})