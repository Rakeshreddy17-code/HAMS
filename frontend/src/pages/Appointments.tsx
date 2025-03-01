import React from 'react';

const Appointments = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerDecoration}></div>
        <h1 style={styles.heading}>Appointments</h1>
        <p style={styles.subtext}>Manage your appointments efficiently</p>
      </div>

      <div style={styles.tableContainer}>
        <div style={styles.tableControls}>
          <div style={styles.tableInfo}>
            <span style={styles.infoIcon}>📅</span>
            <span style={styles.infoText}>Showing upcoming appointments</span>
          </div>
          <div style={styles.tableActions}>
            <div style={styles.searchBox}>
              <span style={styles.searchIcon}>🔍</span>
              <input type="text" placeholder="Search appointments..." style={styles.searchInput} />
            </div>
            <button style={styles.addButton}>+ New Appointment</button>
          </div>
        </div>
      
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
              <td style={styles.tableCell}>
                <span style={styles.statusBadgeConfirmed}>Confirmed</span>
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Jane Roe</td>
              <td style={styles.tableCell}>Dr. Johnson</td>
              <td style={styles.tableCell}>Feb 26, 2025</td>
              <td style={styles.tableCell}>
                <span style={styles.statusBadgePending}>Pending</span>
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Sam Wilson</td>
              <td style={styles.tableCell}>Dr. Adams</td>
              <td style={styles.tableCell}>Feb 27, 2025</td>
              <td style={styles.tableCell}>
                <span style={styles.statusBadgeConfirmed}>Confirmed</span>
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Emily Johnson</td>
              <td style={styles.tableCell}>Dr. Williams</td>
              <td style={styles.tableCell}>Mar 1, 2025</td>
              <td style={styles.tableCell}>
                <span style={styles.statusBadgeCancelled}>Cancelled</span>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div style={styles.tablePagination}>
          <button style={styles.paginationButton}>Previous</button>
          <span style={styles.paginationInfo}>Page 1 of 3</span>
          <button style={styles.paginationButton}>Next</button>
        </div>
      </div>
    </div>
  );
};

// Define proper TypeScript styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 30,
    maxWidth: 1000,
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
  tableContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.05)",
    padding: 20,
    border: "1px solid #e2e8f0",
    overflow: "hidden",
  },
  tableControls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: "0 10px",
  },
  tableInfo: {
    display: "flex",
    alignItems: "center",
  },
  infoIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  infoText: {
    color: "#64748b",
    fontSize: 15,
  },
  tableActions: {
    display: "flex",
    gap: 15,
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 6,
    padding: "8px 12px",
  },
  searchIcon: {
    marginRight: 8,
    color: "#64748b",
  },
  searchInput: {
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    fontSize: 14,
    width: 200,
  },
  addButton: {
    backgroundColor: "#4a6cf7",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "8px 16px",
    fontWeight: 500,
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
  },
  tableHeader: {
    backgroundColor: "#1e3a8a",
    color: "#fff",
  },
  tableRow: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #f1f5f9",
    transition: "background-color 0.2s",
  },
  tableCell: {
    border: "1px solid #e2e8f0",
    padding: 14,
    textAlign: "left" as const,
  },
  statusBadgeConfirmed: {
    display: "inline-block",
    backgroundColor: "#10b981",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
  },
  statusBadgePending: {
    display: "inline-block",
    backgroundColor: "#f59e0b",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
  },
  statusBadgeCancelled: {
    display: "inline-block",
    backgroundColor: "#ef4444",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
  },
  tablePagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 10px",
    borderTop: "1px solid #e2e8f0",
  },
  paginationButton: {
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
    borderRadius: 6,
    padding: "8px 16px",
    fontSize: 14,
    cursor: "pointer",
  },
  paginationInfo: {
    color: "#64748b",
    fontSize: 14,
  },
};

export default Appointments;