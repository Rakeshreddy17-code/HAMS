const express = require("express");
const { verifyToken, roleAuth } = require("../middleware/authMiddleware");
const { prisma } = require("../../prisma/client"); // Import Prisma instance

const router = express.Router();

// ✅ Admin: Get All Users
router.get("/users", verifyToken, roleAuth(["admin"]), async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
});

// ✅ Admin: Promote a User to Admin
router.put("/users/:id/make-admin", verifyToken, roleAuth(["admin"]), async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await prisma.user.update({
            where: { id },
            data: { role: "admin" }
        });
        res.json({ message: "User promoted to admin", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user role", error: error.message });
    }
});

// ✅ Admin: Remove Admin Privileges (Demote to User)
router.put("/users/:id/remove-admin", verifyToken, roleAuth(["admin"]), async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await prisma.user.update({
            where: { id },
            data: { role: "user" }
        });
        res.json({ message: "Admin demoted to user", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user role", error: error.message });
    }
});

// ✅ Admin: Get All Appointments
router.get("/appointments", verifyToken, roleAuth(["admin"]), async (req, res) => {
    try {
        const appointments = await prisma.appointment.findMany();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching appointments", error: error.message });
    }
});

module.exports = router;
