import React from 'react';

const Settings = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerDecoration}></div>
        <h1 style={styles.heading}>Settings</h1>
        <p style={styles.subtext}>Configure your preferences</p>
      </div>

      <div style={styles.settingsContainer}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Account</h2>
          <div style={styles.buttonGroup}>
            <button style={styles.button}>Change Password</button>
            <button style={styles.button}>Update Email</button>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Notifications</h2>
          <div style={styles.settingRow}>
            <span style={styles.settingLabel}>Email Notifications</span>
            <div style={styles.simpleSwitchContainer}>
              <div style={styles.simpleSwitch}></div>
            </div>
          </div>
          <div style={styles.settingRow}>
            <span style={styles.settingLabel}>SMS Alerts</span>
            <div style={styles.simpleSwitchContainer}>
              <div style={{...styles.simpleSwitch, left: "4px"}}></div>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Privacy</h2>
          <div style={styles.buttonGroup}>
            <button style={styles.button}>Data Export</button>
            <button style={{...styles.button, backgroundColor: "#ef4444"}}>Delete Account</button>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Theme</h2>
          <div style={styles.themeOptions}>
            <div style={styles.themeOption}>
              <div style={{...styles.themeCircle, backgroundColor: '#ffffff', border: '2px solid #1e3a8a'}}></div>
              <span style={styles.themeLabel}>Light</span>
            </div>
            <div style={styles.themeOption}>
              <div style={{...styles.themeCircle, backgroundColor: '#1e3a8a'}}></div>
              <span style={styles.themeLabel}>Dark</span>
            </div>
            <div style={styles.themeOption}>
              <div style={{...styles.themeCircle, background: 'linear-gradient(135deg, #1e3a8a 0%, #4a6cf7 100%)'}}></div>
              <span style={styles.themeLabel}>System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  settingsContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.05)",
    padding: 30,
    border: "1px solid #e2e8f0",
  },
  section: {
    marginBottom: 30,
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: 25,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 600,
    color: "#334155",
    marginBottom: 20,
    textAlign: "left" as const,
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 15,
    marginBottom: 10,
  },
  button: {
    padding: "12px 20px",
    margin: 0,
    backgroundColor: "#4a6cf7",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 500,
    fontSize: 16,
    transition: "background-color 0.2s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  settingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #f1f5f9",
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: "#334155",
  },
  simpleSwitchContainer: {
    position: "relative" as const,
    width: 50,
    height: 24,
    backgroundColor: "#cbd5e1",
    borderRadius: 24,
    cursor: "pointer",
  },
  simpleSwitch: {
    position: "absolute" as const,
    height: 16,
    width: 16,
    top: 4,
    right: 4,
    backgroundColor: "white",
    borderRadius: 50,
    transition: "0.4s",
  },
  themeOptions: {
    display: "flex",
    gap: 30,
    padding: "15px 0",
  },
  themeOption: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 8,
  },
  themeCircle: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  themeLabel: {
    fontSize: 14,
    color: "#64748b",
  },
};

export default Settings;