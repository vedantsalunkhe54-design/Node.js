const userModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model");

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const isAlreadyExist = await userModel.findOne({
      $or: [{ email }, { username }]
    });

    if (isAlreadyExist) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Create user
    const user = await userModel.create({
      username,
      email,
      password: hash
    });

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    // Store token in cookie
    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Error registering user:", error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
}


async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Error logging in user:", error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
}

async function logoutUser(req, res) {
  const token = req.cookies.token;

  if(token){
    await tokenBlacklistModel.create({ token });
  }

  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out successfully"
  });
}

async function getMeController(req, res) {


    const user = await userModel.findById(req.user.id);

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
}

    


module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getMeController
};
