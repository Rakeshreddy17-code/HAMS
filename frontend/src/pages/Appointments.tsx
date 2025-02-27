const Appointments = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Appointments</h1>
        <p style={styles.subtext}>Manage your appointments efficiently</p>
  
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.tableCell}>Patient Name</th>
              <th style={styles.tableCell}>Doctor</th>
              <th style={styles.tableCell}>Date</th>
              <th style={styles.tableCell}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>John Doe</td>
              <td style={styles.tableCell}>Dr. Smith</td>
              <td style={styles.tableCell}>Feb 25, 2025</td>
              <td style={styles.tableCell}>Confirmed</td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Jane Roe</td>
              <td style={styles.tableCell}>Dr. Johnson</td>
              <td style={styles.tableCell}>Feb 26, 2025</td>
              <td style={styles.tableCell}>Pending</td>
            </tr>
          </tbody>
        </table>
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
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: 20,
    },
    tableHeader: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    tableRow: {
      backgroundColor: "#f8f9fa",
    },
    tableCell: {
      border: "1px solid #ddd",
      padding: 10,
      textAlign: "left" as const,
    },
  };
  
  export default Appointments;
  