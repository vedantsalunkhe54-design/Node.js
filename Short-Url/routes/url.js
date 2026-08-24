const express = require('express');
const {generateNewUrl}= require('../controllers/url');
const router = express.Router();

router.post('/', generateNewUrl);