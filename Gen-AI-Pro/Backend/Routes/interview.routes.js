const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const interviewController = require("../controllers/interview.controller");
const upload = require("../middleware/file.middleware");

console.log(
    "authenticateToken:",
    typeof authMiddleware.authenticateToken
);

console.log(
    "upload:",
    typeof upload
);

console.log(
    "upload.single:",
    typeof upload.single
);

console.log(
    "generateInterviewReportController:",
    typeof interviewController.generateInterviewReportController
);

const interviewRouter = express.Router();

interviewRouter.post(
    "/",
    authMiddleware.authenticateToken,
    upload.single("resume"),
    interviewController.generateInterviewReportController
);

module.exports = interviewRouter;