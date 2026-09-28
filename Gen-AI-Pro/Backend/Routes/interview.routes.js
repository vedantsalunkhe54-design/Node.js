const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middleware/file.middleware")


const interviewRouter = express.Router();


interviewRouter.get("/", authMiddleware.authenticateToken, interviewController.generateInterviewReportController)

module.exports = interviewRouter ;