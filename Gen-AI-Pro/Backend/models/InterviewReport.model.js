const mongoose = require ('mongoose')

const interviewReportSchema = new mongoose.Schema({
    jobDescription : { type:String, required: [true, "Job Description is required"]},
    resume: {type: String},
    selfDescription: { type: String},
    matchScore: {type: Number, min: 0, max: 100},
    
})