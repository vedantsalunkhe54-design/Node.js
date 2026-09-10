const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require('../models/blacklist.model');

async function authenticateToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const isBlacklisted = await tokenBlacklistModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(403).json({ message: 'Token is blacklisted. Please log in again.' });
    }

    try{
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

     req.user = decoded;

     next();

    }
    catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }

}

module.exports = authenticateToken;