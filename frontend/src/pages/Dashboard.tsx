import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:5000/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.heading}>Healthcare Dashboard</h1>
          <p style={styles.subtext}>
            Welcome, {user ? user.name : "to the Healthcare Appointment Management System"}
          </p>
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>

      <div style={styles.statsOverview}>
        <p style={styles.statsHeading}>System Overview</p>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <span style={styles.iconCircle}>📅</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Total Appointments</h3>
              <p style={styles.cardValue}>120</p>
            </div>
          </div>
          
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <span style={styles.iconCircle}>👨‍⚕️</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Total Doctors</h3>
              <p style={styles.cardValue}>25</p>
            </div>
          </div>
          
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <span style={styles.iconCircle}>🧑</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>Total Patients</h3>
              <p style={styles.cardValue}>300</p>
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.footer}>
        <p style={styles.footerText}>© 2025 Healthcare Appointment Management System</p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "30px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    borderBottom: "1px solid #e9ecef",
    paddingBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 0,
    color: "#2c3e50",
  },
  subtext: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 5,
    marginBottom: 0,
  },
  statsOverview: {
    marginBottom: 40,
  },
  statsHeading: {
    fontSize: 18,
    color: "#6c757d",
    fontWeight: 600,
    marginBottom: 20,
    textAlign: "left",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px 25px",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    display: "flex",
    alignItems: "center",
    flex: "1 1 300px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    border: "1px solid #e9ecef",
    position: "relative",
    overflow: "hidden",
  },
  cardIcon: {
    marginRight: 20,
  },
  iconCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#eef5ff",
    fontSize: 24,
  },
  cardContent: {
    textAlign: "left",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 5,
    color: "#6c757d",
  },
  cardValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    margin: 0,
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: "bold",
    transition: "background-color 0.2s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  footer: {
    marginTop: 60,
    textAlign: "center",
    borderTop: "1px solid #e9ecef",
    paddingTop: 20,
  },
  footerText: {
    color: "#adb5bd",
    fontSize: 14,
  },
};

export default Dashboard;