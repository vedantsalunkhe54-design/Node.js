const pdfParser = require ("pdf-parse")
const generateInteviewReport = require("../src/services/ai.service")
const { resume } = require("../src/services/temp")
const interviewReportModel = require("../models/InterviewReport.model")
const { response } = require("../src/app")


async function generateInterviewReportController(req, res){

    const resumeContent = pdfParse(req.file.buffer)
    const {selfDescription, jobDescription} = req.body

    const interviewReportByAi = await generateInteviewReport({
        resume: resumeContent,
        selfDescription,
        jobDescription
    })

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })

    res.status(201).json({
        message: "Interview report generated successfully",
        interviewReport
    })
}



module.exports = {generateInterviewReportController}