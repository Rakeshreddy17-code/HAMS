import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Backend base URL

export const fetchUserData = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/auth/user`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.user;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};
