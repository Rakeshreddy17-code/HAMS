const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Protect routes
const prisma = require("../../models/User"); // Use existing Prisma instance

const router = express.Router();

/**
 * ✅ Fetch all appointments for the logged-in user
 */
router.get("/", authMiddleware, async (req, res) => {
    try {
        const appointments = await prisma.appointment.findMany({
            where: { userId: req.user.userId },
        });

        if (!appointments.length) {
            return res.status(404).json({ message: "No appointments found" });
        }

        res.json({ message: "Appointments fetched successfully", appointments });
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Server error" });
    }
});

/**
 * ✅ Create a new appointment
 */
router.post("/", authMiddleware, async (req, res) => {
    const { date, time, description } = req.body;

    if (!date || !time || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newAppointment = await prisma.appointment.create({
            data: {
                date: new Date(date),
                time,
                description,
                userId: req.user.userId, 
            },
        });

        res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
    } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(500).json({ message: "Server error" });
    }
});

/**
 * ✅ Update an existing appointment
 */
router.put("/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { date, time, description } = req.body;

    try {
        // Check if appointment exists and belongs to user
        const appointment = await prisma.appointment.findUnique({
            where: { id },
        });

        if (!appointment || appointment.userId !== req.user.userId) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        const updatedAppointment = await prisma.appointment.update({
            where: { id },
            data: { date: new Date(date), time, description },
        });

        res.json({ message: "Appointment updated successfully", appointment: updatedAppointment });
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(500).json({ message: "Server error" });
    }
});

/**
 * ✅ Delete an appointment
 */
router.delete("/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        // Check if appointment exists and belongs to user
        const appointment = await prisma.appointment.findUnique({
            where: { id },
        });

        if (!appointment || appointment.userId !== req.user.userId) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        await prisma.appointment.delete({ where: { id } });

        res.json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error("Error deleting appointment:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
