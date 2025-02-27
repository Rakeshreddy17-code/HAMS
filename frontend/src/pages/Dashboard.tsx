const Dashboard = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Dashboard</h1>
        <p style={styles.subtext}>Welcome to the Healthcare Appointment Management System</p>
  
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Total Appointments</h3>
            <p style={styles.cardValue}>120</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Total Doctors</h3>
            <p style={styles.cardValue}>25</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Total Patients</h3>
            <p style={styles.cardValue}>300</p>
          </div>
        </div>
      </div>
    );
  };
  
  // Define proper TypeScript styles
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      padding: 20,
      textAlign: "center" as const,
    },
    heading: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtext: {
      fontSize: 18,
      color: "#555",
      marginBottom: 20,
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      gap: 20,
      flexWrap: "wrap" as const,
    },
    card: {
      backgroundColor: "#f8f9fa",
      padding: 20,
      borderRadius: 10,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center" as const,
      width: 200,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    cardValue: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#007bff",
    },
  };
  
  export default Dashboard;
  