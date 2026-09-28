const pdfParser = require ("pdf-parse")
const generateInteviewReport = require("../src/services/ai.service")
const { resume } = require("../src/services/temp")
const interviewReportModel = require("../models/InterviewReport.model")
const { response } = require("../src/app")


async function generateInterviewReportController(req, res){

    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const {selfDescription, jobDescription} = req.body

    const interviewReportByAi = await generateInteviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
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