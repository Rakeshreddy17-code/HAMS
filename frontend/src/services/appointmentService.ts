import axios from "axios";

const API_URL = "http://localhost:5000/api/appointments"; // Update if needed

// Fetch all appointments
export const getAppointments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments", error);
    return [];
  }
};

// Create a new appointment
export const createAppointment = async (appointmentData: any) => {
  try {
    const response = await axios.post(API_URL, appointmentData);
    return response.data;
  } catch (error) {
    console.error("Error creating appointment", error);
  }
};

// Delete an appointment
export const deleteAppointment = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting appointment", error);
  }
}; 