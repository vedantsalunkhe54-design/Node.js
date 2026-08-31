import userModel from "../models/user.model.js";
import sessionModel from "../models/session.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";


// ==============================
// REGISTER
// ==============================
export async function register(req, res) {
    try {
        const { username, email, password } = req.body;

        // Check required fields
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email and password are required"
            });
        }

        // Check if user already exists
        const isAlreadyRegistered = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        if (isAlreadyRegistered) {
            return res.status(409).json({
                message: "Username or email already exists"
            });
        }

        // Hash password
        const hashedPassword = crypto
            .createHash("sha256")
            .update(password)
            .digest("hex");

        // Create user
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        });

        // Create refresh token
        const refreshToken = jwt.sign(
            {
                id: user._id
            },
            config.jwtSecret,
            {
                expiresIn: "7d"
            }
        );

        // Hash refresh token
        const refreshTokenHash = crypto
            .createHash("sha256")
            .update(refreshToken)
            .digest("hex");

        // Create session
        const session = await sessionModel.create({
            user: user._id,
            refreshTokenHash: refreshTokenHash,
            ip: req.ip,
            userAgent: req.headers["user-agent"]
        });

        // Create access token
        const accessToken = jwt.sign(
            {
                id: user._id,
                sessionID: session._id
            },
            config.jwtSecret,
            {
                expiresIn: "15m"
            }
        );

        // Store refresh token in cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            message: "User registered successfully",

            user: {
                username: user.username,
                email: user.email
            },

            accessToken
        });

    } catch (error) {
        console.error("REGISTER ERROR:", error);

        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


// ==============================
// GET ME
// ==============================
export async function getMe(req, res) {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }

        const decoded = jwt.verify(
            token,
            config.jwtSecret
        );

        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User fetched successfully",

            user: {
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error("GET ME ERROR:", error);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}


// ==============================
// REFRESH TOKEN
// ==============================
export async function refreshToken(req, res) {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token doesn't exist"
            });
        }

        // Verify refresh token
        const decoded = jwt.verify(
            refreshToken,
            config.jwtSecret
        );

        // Create new access token
        const accessToken = jwt.sign(
            {
                id: decoded.id
            },
            config.jwtSecret,
            {
                expiresIn: "15m"
            }
        );

        return res.status(200).json({
            message: "Access token refreshed successfully",
            accessToken
        });

    } catch (error) {
        console.error("REFRESH TOKEN ERROR:", error);

        return res.status(401).json({
            message: "Invalid or expired refresh token"
        });
    }
}