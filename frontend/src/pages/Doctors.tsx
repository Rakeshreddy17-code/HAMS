import React from "react";

const Doctors = () => {
  // Sample doctor data
  const doctorsData = [
    { name: "Dr. Smith", specialty: "Cardiologist", availability: "Mon, Wed, Fri", experience: "15 years" },
    { name: "Dr. Johnson", specialty: "Orthopedic", availability: "Tue, Thu, Sat", experience: "12 years" },
    { name: "Dr. Williams", specialty: "Dermatologist", availability: "Mon, Thu, Sat", experience: "10 years" }
  ];

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
    listContainer: {
      width: "100%",
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      width: "100%",
    },
    listItem: {
      fontSize: "18px",
      backgroundColor: "#fff",
      marginBottom: "15px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    listItemHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
    },
    doctorCard: {
      display: "flex",
      flexDirection: "column",
    },
    doctorHeader: {
      padding: "20px",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    doctorName: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#2d3748",
      margin: 0,
    },
    doctorSpecialty: {
      fontSize: "16px",
      color: "#4a90e2",
      fontWeight: 500,
    },
    doctorDetails: {
      padding: "20px",
      textAlign: "left",
    },
    detailRow: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    detailLabel: {
      fontSize: "14px",
      color: "#718096",
      width: "120px",
      fontWeight: 600,
    },
    detailValue: {
      fontSize: "16px",
      color: "#2d3748",
    },
    searchBar: {
      width: "100%",
      padding: "12px 20px",
      marginBottom: "25px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
      outline: "none",
      transition: "border-color 0.3s, box-shadow 0.3s",
    },
    searchBarFocus: {
      borderColor: "#4a90e2",
      boxShadow: "0 0 0 2px rgba(74, 144, 226, 0.2)",
    },
    appointmentButton: {
      marginTop: "10px",
      padding: "12px 20px",
      backgroundColor: "#4a90e2",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s",
      width: "30%",
    },
    appointmentButtonHover: {
      backgroundColor: "#3a7bc8",
    },
    viewAllButton: {
      marginTop: "20px",
      padding: "12px 25px",
      backgroundColor: "transparent",
      color: "#4a90e2",
      border: "2px solid #4a90e2",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s",
      display: "inline-block",
    },
    viewAllButtonHover: {
      backgroundColor: "#4a90e2",
      color: "#fff",
    },
  };

  // State for handling hover effects
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);
  const [isViewAllHovered, setIsViewAllHovered] = React.useState(false);
  const [hoveredButtons, setHoveredButtons] = React.useState<number[]>([]);

  return (
    <div style={styles.container}>
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>
          Our <span style={styles.headingHighlight}>Doctors</span>
          <div style={styles.headingUnderline}></div>
        </h1>
      </div>
      <p style={styles.subtext}>Find the perfect specialist for your health needs</p>

      <div style={styles.listContainer}>
        <input
          type="text"
          placeholder="Search for doctors or specialties..."
          style={isSearchFocused ? {...styles.searchBar, ...styles.searchBarFocus} : styles.searchBar}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />

        <ul style={styles.list}>
          {doctorsData.map((doctor, index) => (
            <li 
              key={index} 
              style={hoveredItem === index ? {...styles.listItem, ...styles.listItemHover} : styles.listItem}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={styles.doctorCard}>
                <div style={styles.doctorHeader}>
                  <h3 style={styles.doctorName}>{doctor.name}</h3>
                  <span style={styles.doctorSpecialty}>{doctor.specialty}</span>
                </div>
                <div style={styles.doctorDetails}>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Availability:</span>
                    <span style={styles.detailValue}>{doctor.availability}</span>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Experience:</span>
                    <span style={styles.detailValue}>{doctor.experience}</span>
                  </div>
                  <button 
                    style={
                      hoveredButtons.includes(index) 
                        ? {...styles.appointmentButton, ...styles.appointmentButtonHover} 
                        : styles.appointmentButton
                    }
                    onMouseEnter={() => setHoveredButtons([...hoveredButtons, index])}
                    onMouseLeave={() => setHoveredButtons(hoveredButtons.filter(i => i !== index))}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          style={isViewAllHovered ? {...styles.viewAllButton, ...styles.viewAllButtonHover} : styles.viewAllButton}
          onMouseEnter={() => setIsViewAllHovered(true)}
          onMouseLeave={() => setIsViewAllHovered(false)}
        >
          View All Doctors
        </button>
      </div>
    </div>
  );
};

export default Doctors;