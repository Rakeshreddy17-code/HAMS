const Patients = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Patients</h1>
        <p style={styles.subtext}>List of registered patients</p>
  
        <ul style={styles.list}>
          <li style={styles.listItem}>John Doe - 35 years</li>
          <li style={styles.listItem}>Jane Roe - 42 years</li>
          <li style={styles.listItem}>Sam Wilson - 29 years</li>
        </ul>
      </div>
    );
  };
  
  const styles: { [key: string]: React.CSSProperties } = {
    container: { padding: 20, textAlign: "center" as const },
    heading: { fontSize: 32, fontWeight: "bold", marginBottom: 10 },
    subtext: { fontSize: 18, color: "#555", marginBottom: 20 },
    list: { listStyle: "none", padding: 0 },
    listItem: { fontSize: 18, padding: 10, backgroundColor: "#f8f9fa", marginBottom: 5, borderRadius: 5 },
  };
  
  export default Patients;
  