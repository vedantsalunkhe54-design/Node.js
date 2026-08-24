const express = require('express');

const {
    handleGenerateNewShortURL,
    handleGetShortURL
} = require('../controllers/url');

const router = express.Router();

router.post('/', handleGenerateNewShortURL);

router.get('/:shortId', handleGetShortURL);

module.exports = router;