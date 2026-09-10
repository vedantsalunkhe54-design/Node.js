const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');


const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required"]
    }
}, {
    timestamps: true
});

const tokenBlacklistModel = mongoose.model('blacklistTokens', blacklistSchema);

module.exports = tokenBlacklistModel;