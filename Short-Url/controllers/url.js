const nanoid = require('nanoid');


async function generateNewUrl(req, res) {
    const shortId = nanoid.nanoid(8);         
    await URL.create{
        shortId: shortId,
        
    }
}