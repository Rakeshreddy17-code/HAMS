const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/auth.routes");
const appointmentRoutes = require("./src/routes/appointment.routes"); // Added appointment routes

dotenv.config();
console.log("JWT Secret:", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({ message: "Server is working!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes); // Registered appointment routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Auth and Appointment routes loaded successfully.");
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;