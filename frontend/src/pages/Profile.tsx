import React from "react";

const Profile = () => {
  // Enhanced styles
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      padding: "40px 20px",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    headingContainer: {
      position: "relative",
      marginBottom: "30px",
      padding: "0 10px",
      display: "inline-block",
    },
    heading: {
      fontSize: "36px",
      fontWeight: 700,
      color: "#2c3e50",
      textTransform: "uppercase",
      letterSpacing: "1px",
      textAlign: "center",
      margin: "0 0 5px 0",
      position: "relative",
    },
    headingUnderline: {
      content: "''",
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      background: "linear-gradient(to right, #4a90e2, #63b3ed)",
      borderRadius: "2px",
    },
    headingHighlight: {
      color: "#4a90e2",
      fontWeight: 800,
    },
    subtext: {
      fontSize: "18px",
      color: "#5a6a7e",
      marginBottom: "30px",
      fontWeight: 400,
      textAlign: "center",
    },
    profileContainer: {
      width: "100%",
      maxWidth: "600px",
    },
    profileCard: {
      padding: "30px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    profileCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
    },
    profileSection: {
      marginBottom: "25px",
      paddingBottom: "20px",
      borderBottom: "1px solid #eee",
    },
    profileSectionLast: {
      marginBottom: "0",
      paddingBottom: "0",
      borderBottom: "none",
    },
    profileLabel: {
      fontSize: "14px",
      color: "#718096",
      marginBottom: "5px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      fontWeight: 600,
    },
    profileValue: {
      fontSize: "18px",
      color: "#2d3748",
      fontWeight: 500,
    },
    editButton: {
      marginTop: "25px",
      padding: "12px 25px",
      backgroundColor: "#4a90e2",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      display: "inline-block",
      boxShadow: "0 4px 6px rgba(74, 144, 226, 0.2)",
    },
    editButtonHover: {
      backgroundColor: "#3a7bc8",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 8px rgba(74, 144, 226, 0.3)",
    },
  };

  // State for handling hover effects
  const [isCardHovered, setIsCardHovered] = React.useState(false);
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>
          My <span style={styles.headingHighlight}>Profile</span>
          <div style={styles.headingUnderline}></div>
        </h1>
      </div>
      <p style={styles.subtext}>Manage your personal information and account settings</p>

      <div style={styles.profileContainer}>
        <div 
          style={isCardHovered ? {...styles.profileCard, ...styles.profileCardHover} : styles.profileCard}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
        >
          <div style={styles.profileSection}>
            <div style={styles.profileLabel}>Name</div>
            <div style={styles.profileValue}>John Doe</div>
          </div>

          <div style={styles.profileSection}>
            <div style={styles.profileLabel}>Email Address</div>
            <div style={styles.profileValue}>john.doe@example.com</div>
          </div>

          <div style={{...styles.profileSection, ...styles.profileSectionLast}}>
            <div style={styles.profileLabel}>Role</div>
            <div style={styles.profileValue}>Admin</div>
          </div>

          <button 
            style={isButtonHovered ? {...styles.editButton, ...styles.editButtonHover} : styles.editButton}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;