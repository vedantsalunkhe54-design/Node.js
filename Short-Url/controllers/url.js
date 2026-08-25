const { nanoid } = require('nanoid');
const URL = require('../model/Url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: 'url is required'
        });
    }

    const shortId = nanoid(8);

    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.render('Home', {
        shortId: shortId,
        redirectUrl: body.url
    });
    
}

async function handleGetShortURL(req, res) {
    const shortId = req.params.shortId;

    const entry = await URL.findOne({ shortId });

    if (!entry) {
        return res.status(404).send('Short URL not found');
    }

    return res.redirect(entry.redirectUrl);
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetShortURL
};