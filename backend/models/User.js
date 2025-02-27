const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = prisma; // Export the full Prisma instance 
