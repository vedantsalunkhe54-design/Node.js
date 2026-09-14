const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: Token not found",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized: Invalid or expired token",
        });
    }
};

module.exports = {
    authenticateToken,
};