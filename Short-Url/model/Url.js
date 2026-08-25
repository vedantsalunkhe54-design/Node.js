const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true
    },

    redirectUrl: {
        type: String,
        unique: false
    },

    visitHistory: [
        {
            timestamp: {
                type: Number
            }
        }
    ]
},
{
    timestamps: true
});

const Url = mongoose.model('url', schema);

module.exports = Url;