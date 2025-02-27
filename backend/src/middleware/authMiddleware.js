const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authMiddleware = (req, res, next) => {
    // Get token from the request headers
    const authHeader = req.header("Authorization");

    // Check if no token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Extract token after "Bearer "
        const token = authHeader.split(" ")[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);
        req.user = decoded; // Add user data from the token to the request object
        next(); // Move to the next middleware or route handler
    } catch (err) {
        console.error("JWT Verification Error:", err.message);
        res.status(401).json({ message: "Token is not valid" });
    }
};

module.exports = authMiddleware;
