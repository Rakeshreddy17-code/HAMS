import React from 'react';

const Patients = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerDecoration}></div>
        <h1 style={styles.heading}>Patients</h1>
        <p style={styles.subtext}>List of registered patients</p>
      </div>

      <div style={styles.cardContainer}>
        <ul style={styles.list}>
          {patients.map((patient, index) => (
            <li key={index} style={styles.listItem}>
              <div style={styles.patientInfo}>
                <span style={styles.patientName}>{patient.name}</span>
                <span style={styles.patientAge}>{patient.age} years</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Sample data
const patients = [
  { name: "John Doe", age: 35 },
  { name: "Jane Roe", age: 42 },
  { name: "Sam Wilson", age: 29 },
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 30,
    maxWidth: 800,
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: 40,
    position: "relative" as const,
    padding: "30px 0",
  },
  headerDecoration: {
    position: "absolute" as const,
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "6px",
    backgroundColor: "#4a6cf7",
    borderRadius: "3px",
  },
  heading: {
    fontSize: 42,
    fontWeight: 700,
    color: "#1e3a8a",
    marginBottom: 16,
    fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(135deg, #1e3a8a 0%, #4a6cf7 100%)",
    WebkitBackgroundClip: "text" as any,
    WebkitTextFillColor: "transparent" as any,
  },
  subtext: {
    fontSize: 18,
    color: "#64748b",
    marginBottom: 20,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.05)",
    padding: 25,
    border: "1px solid #e2e8f0",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: 18,
    padding: 16,
    backgroundColor: "#f8f9fa",
    marginBottom: 12,
    borderRadius: 8,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    border: "1px solid #e9ecef",
  },
  patientInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  patientName: {
    fontWeight: 500,
    color: "#334155",
  },
  patientAge: {
    color: "#64748b",
    fontWeight: 400,
  },
};

export default Patients;