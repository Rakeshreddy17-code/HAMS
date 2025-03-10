-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "doctorId" TEXT NOT NULL DEFAULT 'default-doctor-id',
ADD COLUMN     "patientId" TEXT NOT NULL DEFAULT 'default-patient-id';
