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

async function getInterviewReportByIdController(req, res){
    const { interviewId } = req.params;

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id });

    if (!interviewReport) {
        return res.status(404).json({ message: "Interview report not found" });
    }

    res.status(200).json({ 
        message: "Interview report retrieved successfully",
        interviewReport 
    });
}

async function getAllInterviewReportsController(req, res) {
    const interviewReports = await interviewReportModel.find({ user: req.user.id });

    res.status(200).json({
        message: "Interview reports retrieved successfully",
        interviewReports
    });
}

// Exporting data
module.exports = {generateInterviewReportController, getInterviewReportByIdController, getAllInterviewReportsController}