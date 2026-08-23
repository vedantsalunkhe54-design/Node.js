 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
    shortId:{
        type: String,
        unique: true,
        unique: true,
    },
    redirectUrl:{
        type: String,
        unique: true,
        
    },
    visitHistory: [{timestamp: {type: number}}]
 },
{timestamps: true}
 );

 const Url = mongoose.model('url', schema);

 module.exports = Url;