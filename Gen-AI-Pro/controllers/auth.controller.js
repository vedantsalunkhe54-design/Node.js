const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
  }
  catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  };


const isAlreadyExist = await userModel.findOne({$or: [{ email }, { username }] });

if (isAlreadyExist) {
  return res.status(400).json({ message: "User already exists" });
}

const hash = await bcrypt.hash(password, 10);

const user = await userModel.create({
  username,
  email,
  password: hash
});

const token = jwt.sign({
  id: user._id,
  username: user.username,
  email: user.email
}, process.env.JWT_SECRET, 
{ expiresIn: "1d" });




}

module.exports = {
  registerUser,
};
