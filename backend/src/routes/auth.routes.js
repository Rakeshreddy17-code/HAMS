const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const prisma = require("../../models/User"); // Use existing Prisma instance


const dotenv = require("dotenv");

dotenv.config();

const jwtSecret = process.env.JWT_SECRET; // Ensure JWT_SECRET is loaded

// --- User Registration ---
router.post(
    "/register",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // Check if user already exists
            const existingUser = await prisma.user.findUnique({ where: { email } });

            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create user
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                },
            });

            res.status(201).json({ message: "User registered successfully", user: newUser });
        } catch (error) {
            console.error("Registration error:", error);
            res.status(500).json({ message: "Server error" });
        }
    }
);



// --- User Login ---
router.post(
    "/login",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Find user by email
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                return res.status(400).json({ message: "Invalid email or password" });
            }

            // Compare passwords
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Invalid email or password" });
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: "1h" });

            res.json({ message: "Login successful", token });
        } catch (error) {
            console.error("Login error:", error);
            res.status(500).json({ message: "Server error" });
        }
    }
);


// --- Protected Route ---
router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "Access granted", user: req.user });
});

module.exports = router;
