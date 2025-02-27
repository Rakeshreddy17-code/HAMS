const Settings = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Settings</h1>
        <p style={styles.subtext}>Configure your preferences</p>
  
        <button style={styles.button}>Change Password</button>
        <button style={styles.button}>Update Email</button>
      </div>
    );
  };
  
  const styles: { [key: string]: React.CSSProperties } = {
    container: { padding: 20, textAlign: "center" as const },
    heading: { fontSize: 32, fontWeight: "bold", marginBottom: 10 },
    subtext: { fontSize: 18, color: "#555", marginBottom: 20 },
    button: { padding: 10, margin: 10, backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: 5, cursor: "pointer" },
  };
  
  export default Settings;
  