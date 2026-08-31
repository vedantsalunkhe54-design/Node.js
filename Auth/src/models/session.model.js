import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true,"User is required"]
    },
    refereshTokenHash: {
        type: String,
        required: [true, "Refresh Token is required"]
    },
    ip: {
        type: String,
        required: [true, "Ip is required"]
    },
    userAgent: {
        type: String,
        required: [true, "userAgent is required"]
    },
    revoked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const sessionModel = mongoose.model("session", sessionSchema);

export default sessionModel;