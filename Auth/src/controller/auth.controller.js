import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export async function register(req, res) {
    const { username, email, password } = req.body;

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

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

    const accessToken = jwt.sign({
        id: user._id,
    }, config.jwtSecret, {
        expiresIn: "15m"
    });

    const refereshToken = jwt.sign({
        id: user._id,
    }, config.jwtSecret, {
        expiresIn: "7d"
    });

    res.cookie("refereshToken", refereshToken,{
        httpOnly: true,
        secure: true,
        sameSite: true,
    })

    res.status(201).json({
        message: "User registered successfully",
        user:{
            username: user.username,
            email: user.email
        },
        accessToken
    })
}


export async function getMe(req, res){
    const token = req.headers.authorization?.split(" ")[ 1 ];

    if(!token){
        res.status(400).json({
            message: "Token Not Found"
        })
    }

    const decoded = jwt.verify(token, config.jwtSecret)
    
    const user = await userModel.findById(decoded.id)

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            username: user.username,
            email: user.email
        }
    })
}


export async function refereshToken(req, res){
    const refereshToken = req.cookies.refereshToken;

    if(!refereshToken){
        res.status(401).json({
            message: "Referesh Token never EXISTED"
        });
    }

    const decoded = jwt.verify(refereshToken, config.jwtSecret);

    const accessToken =jwt.sign({
        id: decoded.id
    }, config.jwtSecret,{
        expiresIn: "15m"
    })

    res.status(200).json({
        message: "Access Token refereshed successfully"
    })
}